import React from 'react'
import ActionMenu1 from './ActionMenu1/ActionMenu1'
import ActionMenu2 from './ActionMenu2/ActionMenu2'
import "./MainAction.css"

export default function MainAction() {
    return (
        <div className="MainAction" >

            <ActionMenu1 />
            <ActionMenu2/>

        </div>
    )
}
