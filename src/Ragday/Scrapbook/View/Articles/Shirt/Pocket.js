import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Pocket({ contrast, id, size, top, axis, onScreen, form, color, side }) {
    const [control, setcontrol] = useContext(Brim)


    const select = () => { setcontrol(p => ({ ...control, selected: "pocket" })) }

    useEffect(() => {

        let pocketMain = document.getElementById("pocket-main" + id);
        if (!control.pocketDesign === false) pocketMain.style.fill = 'url(#pocket-design)';
        else pocketMain.style.fill = color;
        pocketMain.style.stroke = control.bodiceColorFront === "#1A1A1A" ? 'white' : '#1A1A1A'
    })




    const Styles = {
        left: axis,
        top: top,
        zIndex: 3,
        width: size

    }

    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>


            {/* PATCH POCKET */}

            {form === "patch" &&
                <div>

                    {side === "front" ?

                        <svg style={Styles} viewBox="0 0 36 35.88">

                            <defs>
                                <pattern id="pocket-design" viewBox="0,0,10,10" width='100%' height='100%'>
                                    {/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
                                    <image height="10" width="10" href={control.pocketDesign} />
                                </pattern>
                            </defs>

                            <path id={"pocket-main" + id} d="M.5,7.28,6,8.63a50.22,50.22,0,0,0,24,0l5.5-1.35v28.1H.5Z" />

                        </svg>

                        : <svg id={"pocket-main" + id} ></svg>}

                </div>
            }



            {/* SWEATER POCKET */}

            {form === "sweater" &&

                <svg style={{ ...Styles, strokeWidth: 0.7, width: size + 110, top: top + 110, left: axis - 109 }} viewBox="0 0 109.56 72.64">
                    {/* width: size + 90, top: top + 75, left: axis - 85  */}

                    <defs>
                        <pattern id="pocket-design" viewBox="0,0,2,1" width='100%' height='100%'>
                            {/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
                            <image height="10" width="10" href={control.pocketDesign} />
                        </pattern>
                    </defs>


                    <path id={"pocket-main" + id} d="M109,56.58c-.95,9.72-30.28,15.57-54.24,15.56S1.51,66.3.55,56.58h0C27.94,45,24.15,6,23.47.5H86.74c-.63,5-4.61,43.82,22.27,55.79Z" />

                    <path d="M109,56.29C82.13,44.32,86.11,5.48,86.74.5h4.51s-4.84,32.15,16.89,41.3Z"
                        style={{ fill: contrast === false ? color : "#e6e6e6", stroke: control.bodiceColorFront === "#1A1A1A" ? "white" : "#1A1A1A" }} />

                    <path d="M.55,56.57,1.44,41.8C23.18,32.65,18.34.5,18.34.5h5.13C24.15,6,27.94,45,.55,56.57Z"
                        style={{ fill: contrast === false ? color : "#e6e6e6", stroke: control.bodiceColorFront === "#1A1A1A" ? "white" : "#1A1A1A" }} />

                </svg>}







        </div>
    )

}
export default Pocket
