function enableGesture(element) {
    let contexts = {}
    const MOUSE_TYPE = Symbol('mouse');

    if(!("ontouchstart" in document)) {
        element.addEventListener('mousedown', event => {
            contexts[MOUSE_TYPE] = {}
            onStart(event, contexts[MOUSE_TYPE]);
            let move = event => {
                onMove(event, contexts[MOUSE_TYPE])
            }
            let end = event => {
                onEnd(event, contexts[MOUSE_TYPE])
                document.removeEventListener('mousemove', move);
            }
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', end, {once: true});
        })
    }

    element.addEventListener('touchstart', event => {
        for(let touch of event.changedTouches) {
            contexts[touch.identifier] = {};
            onStart(touch, contexts[touch.identifier])
        }
    })
    element.addEventListener('touchmove', event => {
        for(let touch of event.changedTouches) {
            onMove(touch, contexts[touch.identifier])
        }
    })
    element.addEventListener('touchend', event => {
        for(let touch of event.changedTouches) {
            onEnd(touch, contexts[touch.identifier])
            delete contexts[touch.identifier];
        }
    })

    let onStart = (event, contexts) => {
        element.dispatchEvent(Object.assign(new CustomEvent("start"), {
            clientX: event.clientX,
            clientY: event.clientY
        }));
        contexts.isTap = true;
        contexts.startX = event.clientX;
        contexts.startY = event.clientY;
        clearTimeout(contexts.timeout);
        contexts.timeout = setTimeout(() => {
            contexts.isTap = false;
            contexts.isPress = true;
            element.dispatchEvent(Object.assign(new CustomEvent('pressstart'), {
                clientX: event.startX,
                clientY: event.startY
            }))
        }, 500)
    }

    let onMove = (event, contexts) => {
        let dx = event.clientX - contexts.startX;
        let dy = event.clientY - contexts.startY;
        if(dx ** 2 + dy ** 2 > 100 && !contexts.isPan) {
            contexts.isPan = true;
            if(contexts.isPress) {
                element.dispatchEvent(Object.assign(new CustomEvent('presscancel'), {
                    clientX: event.startX,
                    clientY: event.startY
                }))
            }
            clearTimeout(contexts.timeout);
            contexts.isTap = false;
            contexts.isPress = false;
            element.dispatchEvent(Object.assign(new CustomEvent("panstart"), {
                clientX: event.clientX,
                clientY: event.clientY,
                startX: contexts.startX,
                startY: contexts.startY
            }));
            return ;
        }

        if(contexts.isPan) {
            element.dispatchEvent(Object.assign(new CustomEvent("pan"), {
                clientX: event.clientX,
                clientY: event.clientY,
                startX: contexts.startX,
                startY: contexts.startY
            }));
        }

        element.dispatchEvent(Object.assign(new CustomEvent("move"), {
            clientX: event.clientX,
            clientY: event.clientY
        }));
        
    }

    let onEnd = (event, contexts) => {
        clearTimeout(contexts.timeout)
        if(contexts.isPan) {
            element.dispatchEvent(Object.assign(new CustomEvent("panend"), {
                clientX: event.clientX,
                clientY: event.clientY,
                startX: contexts.startX,
                startY: contexts.startY
            }));
            contexts.isPan = false;
        }
        if(contexts.isTap) {
            element.dispatchEvent(Object.assign(new CustomEvent("tap"), {
                clientX: event.clientX,
                clientY: event.clientY,
            }));
            contexts.isTap = false;
        }
        if(contexts.isPress) {
            element.dispatchEvent(Object.assign(new CustomEvent("pressend"), {
                clientX: event.clientX,
                clientY: event.clientY,
            }));
            contexts.isPress = false;
        }
        element.dispatchEvent(Object.assign(new CustomEvent("end"), {
            clientX: event.clientX,
            clientY: event.clientY
        }));
    }
}