import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Hem({ id, size, top, axis, onScreen, form, side }) {
    const [control, setcontrol] = useContext(Brim)

    const select = () => { setcontrol({ ...control, selected: "hem" }) }


    useEffect(() => {

        if (side === "front") {

            let hemMain = document.getElementById("front-hem-main" + id);
            if (!control.hemDesign === false) hemMain.style.fill = 'url(#hem-design)';
            else hemMain.style.fill = control.bodiceColorFront;
            hemMain.style.stroke = control.bodiceColorFront === "#1A1A1A" ? 'white' : '#1A1A1A'

        }

        if (side === "back") {

            let hemMain = document.getElementById("back-hem-main" + id);
            if (!control.hemDesign === false) hemMain.style.fill = 'url(#hem-design)';
            else hemMain.style.fill = control.bodiceColorBack;
            hemMain.style.stroke = control.bodiceColorFront === "#1A1A1A" ? 'white' : '#1A1A1A'

        }
    })


    const Styles = {
        left: axis,
        top: top,
        zIndex: 2,
        width: size,
        strokeWidth: 2.1
    }

    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>


            {/* PLAIN HEM */}

            {form === "long" &&
                <div>
                    {side === "front" ?

                        <svg style={Styles} viewBox="0 0 262.7 89.03">

                            <path id={"front-hem-main" + id} d="M262.17,2.89a155.27,155.27,0,0,1-.59,17.63c-2.31,23.33-72.7,68-130.23,68S3.43,43.84,1.13,20.52A161.58,161.58,0,0,1,.6,0" />

                        </svg>

                        :

                        <svg style={Styles} viewBox="0 0 262.7 89.03">

                            <path id={"back-hem-main" + id} d="M262.17,2.89a155.27,155.27,0,0,1-.59,17.63c-2.31,23.33-72.7,68-130.23,68S3.43,43.84,1.13,20.52A161.58,161.58,0,0,1,.6,0" />

                        </svg>
                    }
                </div>
            }



            {/* EXTRA-LONG HEM */}

            {form === "extralong" &&
                <div>
                    {side === "front" ?

                        <svg style={Styles} viewBox="0 0 262.7 140.03">

                            <path id={"front-hem-main" + id} d="M262.17,2.89a155.27,155.27,0,0,1-.59,17.63c-2.31,23.33-72.7,119-130.23,119S3.43,43.84,1.13,20.52A161.58,161.58,0,0,1,.6,0" />

                        </svg>

                        :

                        <svg style={Styles} viewBox="0 0 262.7 140.03">

                            <path id={"back-hem-main" + id} d="M262.17,2.89a155.27,155.27,0,0,1-.59,17.63c-2.31,23.33-72.7,119-130.23,119S3.43,43.84,1.13,20.52A161.58,161.58,0,0,1,.6,0" />

                        </svg>
                    }
                </div>
            }








        </div>
    )

}
export default Hem
