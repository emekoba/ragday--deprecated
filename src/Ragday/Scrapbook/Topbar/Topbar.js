import React, { useContext } from 'react'
import { Brim } from '../State/Control'

function Topbar({ getNotes }) {

    const [control, setcontrol] = useContext(Brim)


    const removeComponent = () => {

        if (

            control.selected === "collar" ||
            control.selected === "neckline" ||
            control.selected === "bodice"

        ) { return null }

        else {
            setcontrol({ ...control, [`${control.selected}OnScreen`]: false, selected: "bodice" })
        }
    }



    const changeSide = () => { setcontrol(p => ({ ...control, shirtSide: p.shirtSide === "front" ? "back" : "front" })) }

    const close = () => {
        document.getElementById("topbar").style.width = "0px"}

        
    return (
        <div id="topbar" className="topbar" onDoubleClick={close}>

            {/* <button id="remove" onClick={removeComponent}>x</button> */}

            {/* <div className='component-board'>{control.selected === "" ? "........." : control.selected}</div>

            <button className='side' style={{ color: control.shirtSide === "back" ? "crimson" : "black" }} onClick={changeSide}>{control.shirtSide} side</button> */}
            <button onClick={getNotes} />

        </div>
    )
}

export default Topbar
