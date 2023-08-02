import React from "react";
import Menu from "./Menu"
import Song from "./Song";
import SinglePage from "./Singlepage";
import { Data } from "./Data";
import CSS from "./CSS/IPodDisplay.module.css"
import { Component } from "react";

export default class IPodDisplay extends Component {
    constructor() {
        super()
        this.state = {
            time: "00:00:00"  //for displaying the current time
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000)
    }

    render() {
        const { currentSong, singlePage, selectedMenu } = this.props;
        const menuName = Object.keys(Data)[selectedMenu];
        const isSongMenu = (menuName == "Songs" && singlePage);

        return (<>
            <div className={CSS.displaySide}>
                <div className={CSS.navBar}>
                    <div className={CSS.left}>
                        <h3>{this.state.time}</h3>
                    </div>
                    <div className={CSS.right}>
                        <img src="https://cdn-icons-png.flaticon.com/128/785/785780.png" alt="" />
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/188/188092.png" alt="" />
                        </div>
                    </div>
                </div>

                 {!currentSong.paused || isSongMenu ? <Song {...this.props} /> : !singlePage ? <Menu {...this.props} /> : <SinglePage {...this.props} />}

            </div>
        </>)
    }
}
