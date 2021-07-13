import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Ankle({ size, axis_L, axis_R, top, onScreen, form, color }) {
    const [control, setcontrol] = useContext(Brim)


    const select = () => { setcontrol({ ...control, selected: "ankle" }) }


    useEffect(() => {

        let leftankle = document.getElementById("left-ankle");
        leftankle.style.fill = color;
        leftankle.style.stroke = control.bodiceColor === '#1A1A1A' && color === "#1A1A1A" ? 'white' : '#1A1A1A';

        let rightankle = document.getElementById("right-ankle");
        rightankle.style.fill = color;
        rightankle.style.stroke = control.bodiceColor === '#1A1A1A' && color === "#1A1A1A" ? 'white' : '#1A1A1A';
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

            {/* PLAIN ankle */}


            {form === "plain" &&

                <div>
                    <svg style={leftStyles} viewBox="0 0 401.04 33.34">


                        <path id={"left-ankle"} d="M9.52,32.84H41.86V1.12S5.79,8,1.43,19.78,9.52,32.84,9.52,32.84Z"
                            style={{ fill: 'none', stroke: '#000' }} />

                    </svg>

                    <svg style={rightStyles} viewBox="0 0 401.04 33.34">

                        <path id={"right-ankle"} d="M391.52,32.33H359.18V.6s36.07,6.84,40.43,18.66S391.52,32.33,391.52,32.33Z"
                            style={{ fill: 'none', stroke: '#000' }} />

                    </svg>
                </div>}


        </div>
    )

}
export default Ankle
