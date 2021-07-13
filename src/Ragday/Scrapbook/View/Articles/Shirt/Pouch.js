import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Pouch({ contrast, id, size, top, axis, onScreen, form, color, side }) {
    const [control, setcontrol] = useContext(Brim)

    const select = () => { setcontrol({ ...control, selected: "pouch" }) }


    useEffect(() => {
        if (control.placketOnScreen === true) {
            setcontrol({ ...control, pouchForm: "split" })
        }
    }, [])



    useEffect(() => {

        let pouchMain = document.getElementById("pouch-main" + id);
        if (!control.pouchDesign === false) pouchMain.style.fill = 'url(#pouch-design)';
        else pouchMain.style.fill = color;
        pouchMain.style.stroke = control.bodiceColorFront === "#1A1A1A" ? 'white' : '#1A1A1A'


        if (control.pouchForm === "split") {

            let pouchMain2 = document.getElementById("pouch-main-2" + id);
            if (!control.pouchDesign === false) pouchMain2.style.fill = 'url(#pouch-design)';
            else pouchMain2.style.fill = color;
            pouchMain2.style.stroke = control.bodiceColorFront === "#1A1A1A" ? 'white' : '#1A1A1A'
        }


    })


    const Styles = {
        left: axis,
        top: top,
        zIndex: 3,
        width: size

    }

    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>


            {/* PLAIN POUCH */}

            {form === "plain" &&
                <div>
                    {side === "front" ?

                        <svg style={{ ...Styles, strokeWidth: 0.7, width: size + 110, top: top + 110, left: axis - 109 }} viewBox="0 0 109.56 72.64">
                            {/* width: size + 90, top: top + 75, left: axis - 85  */}

                            <defs>
                                <pattern id="pouch-design" viewBox="0,0,2,1" width='100%' height='100%'>
                                    {/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
                                    <image height="10" width="10" href={control.pouchDesign} />
                                </pattern>
                            </defs>


                            <path id={"pouch-main" + id} d="M109,56.58c-.95,9.72-30.28,15.57-54.24,15.56S1.51,66.3.55,56.58h0C27.94,45,24.15,6,23.47.5H86.74c-.63,5-4.61,43.82,22.27,55.79Z" />

                            <path d="M109,56.29C82.13,44.32,86.11,5.48,86.74.5h4.51s-4.84,32.15,16.89,41.3Z"
                                style={{ fill: contrast === false ? color : "#e6e6e6", stroke: control.bodiceColorFront === "#1A1A1A" ? "white" : "#1A1A1A" }} />

                            <path d="M.55,56.57,1.44,41.8C23.18,32.65,18.34.5,18.34.5h5.13C24.15,6,27.94,45,.55,56.57Z"
                                style={{ fill: contrast === false ? color : "#e6e6e6", stroke: control.bodiceColorFront === "#1A1A1A" ? "white" : "#1A1A1A" }} />

                        </svg>

                        : <svg id={"pouch-main" + id}></svg>}
                </div>
            }


            {/* SPLIT POUCH */}

            {form === "split" &&
                <div>
                    {side === "front" ?
                        <svg style={{ ...Styles, strokeWidth: 0.7, width: size + 130, top: top + 115, left: axis - 120 }} viewBox="0 0 124.75 72.64">

                            <path id={"pouch-main" + id} d="M23.47.5C24.15,6,27.94,45,.55,56.57h0c1,9.66,29.89,15.49,53.76,15.56L55.13.5Z" />

                            <path id={"pouch-main-2" + id} d="M124.2,56.29C97.32,44.32,101.3,5.48,101.93.5H70.33l-.82,71.64H70c24,0,53.29-5.84,54.24-15.56Z" />

                            <path d="M124.2,56.29l-.87-14.49C101.6,32.65,106.44.5,106.44.5h-4.51C101.3,5.48,97.32,44.32,124.2,56.29Z"
                                style={{ fill: contrast === false ? color : "#e6e6e6", stroke: control.bodiceColorFront === "#1A1A1A" ? "white" : "#1A1A1A" }} />

                            <path d="M23.47.5H18.34s4.84,32.15-16.9,41.3L.55,56.57C27.94,45,24.15,6,23.47.5Z"
                                style={{ fill: contrast === false ? color : "#e6e6e6", stroke: control.bodiceColorFront === "#1A1A1A" ? "white" : "#1A1A1A" }} />

                        </svg>

                        : <svg id={"pouch-main" + id}><svg id={"pouch-main-2" + id} /></svg>}

                </div>
            }







        </div>
    )

}
export default Pouch
