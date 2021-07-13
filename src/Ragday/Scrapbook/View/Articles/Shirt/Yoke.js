import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Yoke({ size, axis_L, axis_R, top, onScreen, form, color, side }) {
    const [control, setcontrol] = useContext(Brim)


    const select = () => { setcontrol({ ...control, selected: "yoke" }) }


    useEffect(() => {

        let leftYoke = document.getElementById("left-yoke");
        leftYoke.style.fill = color;
        leftYoke.style.stroke = control.bodiceColorFront === '#1A1A1A' && color === "#1A1A1A" ? 'white' : '#1A1A1A';

        let rightYoke = document.getElementById("right-yoke");
        rightYoke.style.fill = color;
        rightYoke.style.stroke = control.bodiceColorFront === '#1A1A1A' && color === "#1A1A1A" ? 'white' : '#1A1A1A';
    })




    const leftStyles = {
        left: axis_L,
        top: top,
        zIndex: 2,
        width: size,
        strokeWidth: 2,

    }

    const rightStyles = {
        left: axis_R,
        top: top,
        zIndex: 2,
        width: size,
        strokeWidth: 2,

    }

    const backStyles = {
        strokeWidth: 2,
        width: size + 70,
        left: axis_L,
        top: top + 1,
        zIndex: 2,
    }


    function getX() {
        let x = 93
        if (control.necklineOnScreen === true) {

            switch (control.necklineForm) {

                case "dipped": x = 150; break;
                case "mockneck": x = 15; break;

                default: x = 93; break;
            }
        }
        return x
    }


    let x =

        "M626.25,84c-4.78,10.73-27.31,62.09-36.66,122l-3," +

        "3.24c-268.41-102.67-515.23-12.15-545-.45L37.77,207C28.2," +

        "144.7,4.23,91.4.52,83.11A.14.14,0,0,1,.5,83l1.74-3C35.69,54.48," +

        "173.46.57,173.46.57s128.06," + getX() + ",280.32,0C453.78.57," +

        "591.55,54.48,625,80Z"



    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>

            {/* PLAIN YOKE */}


            {form === "plain" &&

                <div>

                    {side === "front" ?

                        //FRONTSIDE

                        <div>
                            <svg style={leftStyles} viewBox="0 0 401.78 96.14">

                                <path id="left-yoke" d="M7.37,95.47,183.54,15.4,166,.57S7.54,61.4.54,78.4Z" />

                            </svg>

                            <svg style={rightStyles} viewBox="0 0 401.78 96.14">

                                <path id="right-yoke" d="M394.41,95.47,218.24,15.4,235.77.57S394.24,61.4,401.24,78.4Z" />

                            </svg>
                        </div>

                        : // BACKSIDE

                        <div>
                            <svg style={backStyles} viewBox="0 0 626.78 209.87">

                                <path id="right-yoke" d={x} />
                            </svg>

                            <svg id="left-yoke"></svg>

                        </div>
                    }
                </div>
            }




            {/* PLAIN YOKE2 */}


            {form === "plain2" &&

                <div>
                    <svg style={{ ...leftStyles, strokeWidth: 1, top: top + 4, left: axis_L + 2 }} viewBox="0 0 171.25 31.76">

                        <path id="left-yoke" d="M3,31.12l-2.46-6S15.59,10.85,54.46.6l3.5,10Z" />


                    </svg>

                    <svg style={{ ...rightStyles, strokeWidth: 1, top: top + 4, left: axis_R - 2 }} viewBox="0 0 171.25 31.76">

                        <path id="right-yoke" d="M168.2,31.12l2.46-6s-15-14.25-53.87-24.5l-3.5,10Z" />

                    </svg>
                </div>}



        </div>
    )

}
export default Yoke
