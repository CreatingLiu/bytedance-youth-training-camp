import React from "react";
import logo from './AntDesign.svg';
import './index.css';
import dotIcons from './dotIcon'


export default class AntDesignLogo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        }

        this.timer = null

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    start() {
        this.timer = setInterval(()=>this.setState(
            (state)=>(
                {current: (state.current + 1) % dotIcons.length}
            )
        ), 100);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        return (
            <div id="bigLogo">
                <img className="dotIcon" src={dotIcons[this.state.current]} alt="" />
                <img className="AntDesignLogo" src={logo} alt="AntDesignLogo" onMouseEnter={this.start} onMouseLeave={this.stop} />
            </div>
        )
    }
}