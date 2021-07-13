import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function LongSleeve({ size, top, axis_L, axis_R, onScreen, form, colorFront, colorBack, designFront, designBack, side }) {
    const [control, setcontrol] = useContext(Brim)

    const select = () => { setcontrol({ ...control, selected: "longsleeve" }) }


    useEffect(() => {

        if (side === "front") {

            let rightMain = document.getElementById("right-main");

            if (!designFront === false) rightMain.style.fill = 'url(#longsleevepattern)';
            else { rightMain.style.fill = colorFront }


            let leftMain = document.getElementById("left-main");

            if (!designFront === false) leftMain.style.fill = 'url(#longsleevepattern)';
            else { leftMain.style.fill = colorFront }


            let rightTop = document.getElementById("right-top");

            rightTop.style.fill =
                colorFront === "" ? 'e6e6e6' : colorFront;
            rightTop.style.stroke = colorFront;

            let leftTop = document.getElementById("left-top");

            leftTop.style.fill =
                colorFront === "" ? 'e6e6e6' : colorFront;
            leftTop.style.stroke = colorFront;
        }
    })




    useEffect(() => {

        if (side === "back") {

            let backRightMain = document.getElementById("back-right-main");

            if (!designFront === false) backRightMain.style.fill = 'url(#longsleevepattern)';
            else { backRightMain.style.fill = colorBack }


            let backleftMain = document.getElementById("back-left-main");

            if (!designFront === false) backleftMain.style.fill = 'url(#longsleevepattern)';
            else { backleftMain.style.fill = colorBack }


            let backRightTop = document.getElementById("back-right-top");

            backRightTop.style.fill =
                colorBack === "" ? 'e6e6e6' : colorBack;
            backRightTop.style.stroke = colorBack;

            let backLeftTop = document.getElementById("back-left-top");

            backLeftTop.style.fill =
                colorBack === "" ? 'e6e6e6' : colorBack;
            backLeftTop.style.stroke = colorBack;
        }
    })



    const stylesRight = {
        width: size,
        left: axis_R,
        top: top,
        zIndex: 2,

    }

    const stylesLeft = {
        width: size,
        left: axis_L,
        top: top,
        zIndex: 2,

    }


    var toLeft = 12
    var toTop = 4
    var c = 10
    var magnify = 4



    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>



            {/* PLAIN LONG SLEEVE */}

            {form === "plain" &&

                <div>

                    {side === "front" ?

                        //FRONTSIDE
                        <div>
                            <svg style={stylesLeft} viewBox="0 0 60.73 190.96">

                                <defs>
                                    <pattern id="longsleevepattern" viewBox={toLeft + "," + toTop + ","+ c + "," + magnify} width='110%' height='30%'>
                                        {/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
                                        <image height="50" width="50" href={designFront} />
                                    </pattern>
                                </defs>

                                <path id="left-main" d="M.86,184.4v.5a.16.16,0,0,0,.19.17l.27-.08c2.5-.69,14.7-3.64,19.74,3.79,0,.06.42,0,.48-.19,2.54-5.43,22.63-49.64,23.88-78.85,1.14-26.68,9.68-39.86,12.1-43.09a2.15,2.15,0,0,0,.35-1.86C56.11,58.31,47.36,26.56,49.54.5,49.54.27,20.12,9.22,20,34c0,0,1,9.37-6,46.89,0,0-9.06,23.13-8.72,31.5S-.12,122.79.86,184.4Z" />

                                <path id="left-top" d="M58.16,65.84C65.87,37.42,49.56.35,49.54.5,47.13,29.34,57.87,65.17,58.16,65.84Z"
                                    style={{ fill: '#e6e6e6' }} />

                                <path d="M.86,184.9c6.52,8.22,17.78,5.18,20.38,4.12C16.21,181.59,3.36,184.21.86,184.9Z"
                                    style={{ fill: '#e6e6e6' }} />

                            </svg>

                            <svg style={stylesRight} viewBox="0 0 60.73 190.96">

                                <path id="right-main" d="M59.87,184.4v.5a.16.16,0,0,1-.19.17l-.27-.08c-2.5-.69-14.7-3.64-19.74,3.79,0,.06-.42,0-.48-.19-2.54-5.43-22.63-49.64-23.88-78.85C14.17,83.05,5.63,69.88,3.21,66.64a2.15,2.15,0,0,1-.35-1.86C4.63,58.31,13.37,26.56,11.19.5,11.19.27,40.61,9.22,40.78,34c0,0-1,9.37,6,46.89,0,0,9.06,23.13,8.72,31.5S60.85,122.79,59.87,184.4Z" />

                                <path id="right-top" d="M2.57,65.84C-5.14,37.42,11.17.35,11.19.5,13.6,29.34,2.86,65.17,2.57,65.84Z"
                                    style={{ fill: '#e6e6e6' }} />

                                <path d="M59.87,184.9c-6.52,8.22-17.78,5.18-20.38,4.12C44.52,181.59,57.37,184.21,59.87,184.9Z"
                                    style={{ fill: '#e6e6e6' }} />

                            </svg>
                        </div>

                        : //BACKSIDE

                        <div>
                            <svg style={stylesLeft} viewBox="0 0 60.73 190.96">

                                <defs>
                                    <pattern id="longsleevepattern" viewBox={toLeft + "," + toTop + ","+ c + "," + magnify} width='110%' height='30%'>
                                        {/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
                                        <image height="50" width="50" href={designBack} />
                                    </pattern>
                                </defs>

                                <path id="back-left-main" d="M.86,184.4v.5a.16.16,0,0,0,.19.17l.27-.08c2.5-.69,14.7-3.64,19.74,3.79,0,.06.42,0,.48-.19,2.54-5.43,22.63-49.64,23.88-78.85,1.14-26.68,9.68-39.86,12.1-43.09a2.15,2.15,0,0,0,.35-1.86C56.11,58.31,47.36,26.56,49.54.5,49.54.27,20.12,9.22,20,34c0,0,1,9.37-6,46.89,0,0-9.06,23.13-8.72,31.5S-.12,122.79.86,184.4Z" />

                                <path id="back-left-top" d="M58.16,65.84C65.87,37.42,49.56.35,49.54.5,47.13,29.34,57.87,65.17,58.16,65.84Z"
                                    style={{ fill: '#e6e6e6' }} />

                                <path d="M.86,184.9c6.52,8.22,17.78,5.18,20.38,4.12C16.21,181.59,3.36,184.21.86,184.9Z"
                                    style={{ fill: '#e6e6e6' }} />

                            </svg>

                            <svg style={stylesRight} viewBox="0 0 60.73 190.96">

                                <path id="back-right-main" d="M59.87,184.4v.5a.16.16,0,0,1-.19.17l-.27-.08c-2.5-.69-14.7-3.64-19.74,3.79,0,.06-.42,0-.48-.19-2.54-5.43-22.63-49.64-23.88-78.85C14.17,83.05,5.63,69.88,3.21,66.64a2.15,2.15,0,0,1-.35-1.86C4.63,58.31,13.37,26.56,11.19.5,11.19.27,40.61,9.22,40.78,34c0,0-1,9.37,6,46.89,0,0,9.06,23.13,8.72,31.5S60.85,122.79,59.87,184.4Z" />

                                <path id="back-right-top" d="M2.57,65.84C-5.14,37.42,11.17.35,11.19.5,13.6,29.34,2.86,65.17,2.57,65.84Z"
                                    style={{ fill: '#e6e6e6' }} />

                                <path d="M59.87,184.9c-6.52,8.22-17.78,5.18-20.38,4.12C44.52,181.59,57.37,184.21,59.87,184.9Z"
                                    style={{ fill: '#e6e6e6' }} />

                            </svg>
                        </div>
                    }
                </div>}




            {/*  */}
            {/* {form === "" &&
} */}

            {/*  */}
            {/* {form === "" &&
} */}


            {/*  */}
            {/* {form === "" &&
} */}














        </div>
    )
}

export default LongSleeve
