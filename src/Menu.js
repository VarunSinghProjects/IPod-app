import React from "react";
import { Data } from "./Data"
import CSS from "./CSS/Menu.module.css"

export default function Menu(props) {

    const { selectedMenu, selectedOption } = props;
    const arrayMenu = Object.values(Data)[selectedMenu];

    return (<>
        <div className={CSS.body}>
            <div className={CSS.heading}>
                <h1>{Object.keys(Data)[selectedMenu]}</h1>
            </div>
            <div className={CSS.options}>
                {arrayMenu.map((option, index) => (
                    <div key={index}
                        className={`${CSS.item} ${index === selectedOption ? CSS.selectedOption : ''}`}>
                        <div className={CSS.optionName}>
                             <h3>{option.name}</h3>
                        </div>
                        <div className={CSS.optionIcon}>
                            <img src={option.icon} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>)
}
