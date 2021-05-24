import React from "react"
import ControlledTreeView from "../../__treeView/ControlledTreeView";
import GmailTreeView from "../../__treeView/GmailTreeView";

function HomePage() {

    return <div>
    <div>
        <ControlledTreeView/>
    </div>
        <div>
        <GmailTreeView/>
    </div>
    </div>
}

export default HomePage