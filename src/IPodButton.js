import React, { Component } from "react";
import CSS from "./CSS/IPodButton.module.css";

export default function IPodButton(props) {

    const { wheelRef, btnFunction, selectedOption } = props;

    return (<>
        <div className={CSS.buttonSide}>
            <div className={CSS.buttonOuter} ref={wheelRef}>
                {/* menu button */}
                <button className={CSS.button + ' ' + CSS.menuButton} 
                        onTouchEnd={() => btnFunction.menuOrBack()}
                        onClick={() => btnFunction.menuOrBack()}
                >
                   MENU
                </button>
                {/* backward button */}
                <button className={CSS.button + ' ' + CSS.back} 
                        onTouchEnd={() => btnFunction.backwardBtn()} 
                        onClick={() => btnFunction.backwardBtn()}
                >
                    <i class="fa-solid fa-backward-fast"></i>
                </button>
                {/* forward button */}
                <button className={CSS.button + ' ' + CSS.forward} 
                        onTouchEnd={() => btnFunction.forwardBtn()} 
                        onClick={() => btnFunction.forwardBtn()}
                >
                    <i class="fa-solid fa-forward-fast"></i>
                </button>
                {/* play/pause button */}
                <button className={CSS.button + ' ' + CSS.playPause} 
                        onTouchEnd={() => btnFunction.playBtn()} 
                        onClick={() => btnFunction.playBtn()}
                >
                    <i class="fa-solid fa-pause"></i>
                    &nbsp;
                    <i class="fa-solid fa-play"></i>
                </button>

            </div>
             {/* for functionality of OK button */}
            <div className={CSS.buttonInner} 
                 onTouchEnd={() => btnFunction.okButtonHandle(selectedOption)} 
                 onClick={() => btnFunction.okButtonHandle(selectedOption)}
            >
                <h1>OK</h1>
            </div>
        </div>
    </>)
}