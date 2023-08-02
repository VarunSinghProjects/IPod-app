import React from "react";
import IPodDisplay from "./IPodDisplay";
import IPodButton from "./IPodButton";
import CSS from "./CSS/IPodOuter.module.css"

export default function IPod(props) {

    return (<>
        <div className={CSS.container}>
            <IPodDisplay {...props} />
            <IPodButton {...props} />
        </div>
    </>)
}