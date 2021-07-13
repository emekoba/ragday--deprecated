import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Toe({ size, axis_L, axis_R, top, onScreen, form, color }) {
    const [control, setcontrol] = useContext(Brim)


    const select = () => { setcontrol({ ...control, selected: "toe" }) }


    useEffect(() => {

        let lefttoe = document.getElementById("left-toe");
        lefttoe.style.fill = color;
        lefttoe.style.stroke = control.bodiceColor === '#1A1A1A' && color === "#1A1A1A" ? 'white' : '#1A1A1A';

        let righttoe = document.getElementById("right-toe");
        righttoe.style.fill = color;
        righttoe.style.stroke = control.bodiceColor === '#1A1A1A' && color === "#1A1A1A" ? 'white' : '#1A1A1A';
    })




    const leftStyles = {
        left: axis_L,
        top: top,
        zIndex: 2,
        width: size

    }

    const rightStyles = {
        left: axis_R,
        top: top,
        zIndex: 2,
        width: size

    }


    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>

            {/* PLAIN toe */}


            {form === "plain" &&

                <div>
                    <svg style={leftStyles}  viewBox="0 0 42.36 32.83">


                    <path id={"left-toe"} d="M9.52,32.33H41.86V.6S5.79,7.44,1.43,19.26,9.52,32.33,9.52,32.33Z" 
                    style={{fill: 'none', stroke: '#000'}}/>

                    </svg>

                    <svg style={rightStyles} viewBox="0 0 42.36 32.83">

                    <path id={"right-toe"} d="M32.84,32.33H.5V.6S36.57,7.44,40.93,19.26,32.84,32.33,32.84,32.33Z" 
                    style={{fill: 'none', stroke: '#000'}}/>

                    </svg>
                </div>}


        </div>
    )

}
export default Toe
