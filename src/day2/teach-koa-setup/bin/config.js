export function createConfig(answer) {
    const haveMiddleWare = (name) => {
        return answer.middleware.indexOf(name) !== -1;
    }

    return {
        projectName: answer.packageName,
        port: answer.port,
        middleware: {
            router: haveMiddleWare("koaRouter"),
            serve: haveMiddleWare("koaStatic"),
            views: haveMiddleWare("koaViews"),
            koaBody: haveMiddleWare("koaBody")
        }
    }
}