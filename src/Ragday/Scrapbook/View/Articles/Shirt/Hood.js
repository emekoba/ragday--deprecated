import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Hood({ design, id, size, top, axis, onScreen, form, color }) {
    const [control, setcontrol] = useContext(Brim)


    const select = () => { setcontrol({ ...control, selected: "hood" }) }


    useEffect(() => {

        let hoodMain = document.getElementById("hood-main" + id);
        if (!design === false) hoodMain.style.fill = 'url(#hood-design)';
        else hoodMain.style.fill = color;
        hoodMain.style.stroke = control.bodiceColor === "#1A1A1A" ? 'white' : '#1A1A1A'
    })




    const Styles = {
        left: axis,
        top: top,
        zIndex: 3,
        width: size

    }

    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>


            {/* PLAIN HOOD */}

            {form === "plain" &&

                <svg style={Styles} viewBox="0 0 117.25 129.23">

                    <defs>
                        <pattern id="hood-design" viewBox="0,0,10,10" width='100%' height='100%'>
                            {/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
                            <image height="10" width="10" href={control.hoodDesign} />
                        </pattern>
                    </defs>

                    <path id={"hood-main" + id} d="M105.55,87.88S77,126.25,57.29,124H55.76C36,126.25,7.49,87.88,7.49,87.88s-23.61-16.63,16-65.57C36,6.78,47.13,1,56.53.5h0C65.91,1,77,6.78,89.59,22.31,129.17,71.25,105.55,87.88,105.55,87.88Z"
                    />
                    <path d="M95,89c-8.25,7.19-38.14,29.68-38.14,29.68a.45.45,0,0,0-.9,0S26.08,96.14,17.83,89,8.8,14.14,55,19.1h2.84C104,14.14,103.19,81.81,95,89Z"
                        style={{ fill: "#e6e6e6" }} />

                    <path d="M34.29,82.25s19.45-8,44.45,0" style={{ fill: "#e6e6e6" }} />

                </svg>}

        </div>

    )
}

export default Hood