import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Bodice({ useDesign, side, onScreen, form, colorFront, colorBack, designFront, designBack, size, axis, top }) {
    const [control, setcontrol] = useContext(Brim)

    const select = () => { setcontrol({ ...control, selected: "bodice" }) }

    useEffect(() => {

        if (side === "front") {

            let path = document.getElementById("plain-main")
            if (!designFront === false) path.style.fill = 'url(#bodicepattern)';
            else { path.style.fill = colorFront }

            let plainRight = document.getElementById("plain-right")
            plainRight.style.fill = "#e6e6e6";

            let plainLeft = document.getElementById("plain-left")
            plainLeft.style.fill = "#e6e6e6";

        }
    })

    useEffect(() => {

        if (side === "back") {

            let backPath = document.getElementById("back-plain-main")
            if (!designBack === false) backPath.style.fill = 'url(#back-bodicepattern)';
            else { backPath.style.fill = colorBack }

            let backPlainRight = document.getElementById("back-plain-right")
            backPlainRight.style.fill = "#e6e6e6";

            let backPlainLeft = document.getElementById("back-plain-left")
            backPlainLeft.style.fill = "#e6e6e6";

        }
    })


    const styles = {
        width: size,
        left: axis,
        top: top,
        zIndex: 1,
    }



    const getToplineX = () => {
        var x

        switch (control.necklineForm) {
            case "dipped": x = 46; break;
            case "crewneck": x = 10; break;
            case "fluffyneck": x = 20; break;
            case "vneck": x = 30; break;
            case "mockneck": x = null; break;

            default: x = 10; break;
        }

        // if(control.shirtSide === "back"){x = 30}
        if (control.necklineOnScreen === false) { return "" } else { return x }

    }



    const getToplineY = () => {
        var x

        switch (control.necklineForm) {
            case "dipped": x = 46; break;
            case "crewneck": x = 10; break;
            case "fluffyneck": x = 20; break;
            case "vneck": x = 30; break;
            case "mockneck": x = null; break;

            default: x = 10; break;
        }

        // if(control.shirtSide === "back"){x = 30}
        // if (control.necklineOnScreen === false) { return "" } else { return x }

        // "11.5l64.1-11"

        return "11.5l64.1-11"
    }





    const x = "M123.9.58s39.61,15.51,47.38,22.23c0," +

        "0-.09.24-.12.3-1.56,3.5-16.4,36.47-9.35,62.44," +

        "0,0-12.23,23.61-7.92,70,0,0,11.72,46.71,9.13,72.91-1.36," +

        "13.8-43,22.1-77.06,22.1s-75.69-8.3-77.06-22.1C6.32,202.23," +

        "18,155.52,18,155.52c4.31-46.36-7.93-70-7.93-70," +

        "7-26-7.78-58.94-9.35-62.44,0-.06-.08-.25-.11-.3C8.45," +

        "16.08,48,.58,48,.58S80," + getToplineX() + ",123.9.58Z"





    const y = "M289.74,49.06a0,0,0,0,0,0,0c-.05.08-.15.39-.19.49-2.65," +

        "5.92-27.72,61.64-15.8,105.53v0l0,.06c-.13.25-.52,1-1.09,2.38l0," +

        ".09c-4.28,9.93-18.45,48.8-12.23,115.7,0,0,16.84,67.07,16," +

        "112.24a151,151,0,0,1-.6,16.85c-2.31,23.33-72.7,68-130.23," +

        "68s-127.92-44.69-130.22-68a153.6,153.6,0,0,1-.61-17.27V385c-" +

        ".65-45.16,16-111.71,16-111.71,6.22-66.9-8-105.77-12.23-" +

        "115.7l0-.09c-.57-1.34-1-2.13-1.09-2.38l0-.06v0C29.29,111.2," +

        "4.22,55.48,1.57,49.56c0-.1-.15-.41-.19-.49h0C14.52,37.68," +

        "81.45,11.5,81.45," + getToplineY() + ",64.11,11S276.59,37.68,289.74,49.06Z"




    var toLeft = 10
    var toTop = 4
    var c = 5
    var magnify = 18




    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>


            {/* PLAIN */}
            {form === "plain" &&
                <div>
                    {side === "front" ?

                        //FRONTSIDE
                        <svg style={styles} viewBox="0 0 172.66 250.99">

                            <defs>

                                {/* {we can fill this with bodicepatterns of my name or any letter} */}


                                {useDesign === "image" &&

                                    <pattern id="bodicepattern" viewBox={toLeft + "," + toTop + "," + c + "," + magnify} width={control.bodiceDesignWidth} height={control.bodiceDesignHeight}>

                                        <image height="20" width="20" href={designFront} />

                                    </pattern>}



                                {useDesign === "pattern" &&

                                    <pattern id="bodicepattern" viewBox="0,0,10,10" width='20%' height='20%'>


                                        <polygon style={{ fill: control.longsleeveColor }} points="0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2" />

                                        {/* <circle .......
                                        <rect ........
                                        <path ..... for the people to designFront the shape that they want to pattern */}



                                    </pattern>}

                            </defs>

                            <path id="plain-right" d="M162.18,85.51c-7.05-26,7.79-58.94,9.35-62.44,0-.06.09-.25.12-.3h0C174.65,57.29,163.34,82.88,162.18,85.51Z" />

                            <path id="plain-main" d={x} />

                            <path id="plain-left" d="M10.48,85.51C9.33,82.88-2,57.29,1,22.78H1s.08.24.11.3C2.7,26.57,17.53,59.54,10.48,85.51Z" />

                        </svg>

                        ://BACKSIDE

                        <svg style={styles} viewBox="0 0 172.66 250.99">

                            <defs>

                                {useDesign === "image" &&

                                    <pattern id="back-bodicepattern" viewBox={toLeft + "," + toTop + "," + c + "," + magnify} width={control.bodiceDesignWidth} height={control.bodiceDesignHeight}>

                                        <image height="20" width="20" href={designBack} />

                                    </pattern>
                                }



                                {useDesign === "pattern" &&

                                    <pattern id="back-bodicepattern" viewBox="0,0,10,10" width='20%' height='20%'>

                                        <polygon style={{ fill: 'rgb(135, 228, 155)' }} points="0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2" />
                                        {/* <circle .......
                                            <rect ........
                                            <path ..... for the people to designFront the shape that they want to pattern */}

                                    </pattern>
                                }

                            </defs>
                            <path id="back-plain-right" d="M162.18,85.51c-7.05-26,7.79-58.94,9.35-62.44,0-.06.09-.25.12-.3h0C174.65,57.29,163.34,82.88,162.18,85.51Z" />

                            <path id="back-plain-main" d={x} />

                            <path id="back-plain-left" d="M10.48,85.51C9.33,82.88-2,57.29,1,22.78H1s.08.24.11.3C2.7,26.57,17.53,59.54,10.48,85.51Z" />

                        </svg>
                    }

                </div>
            }



            {/* PLAIN 2 */}

            {form === "plain2" &&
                <div>
                    {side === "front" ?

                        //FRONTSIDE
                        <svg style={styles} viewBox="0 0 172.66 250.99">

                            <defs>

                                {/* {we can fill this with bodicepatterns of my name or any letter} */}


                                {useDesign === "image" &&

                                    <pattern id="bodicepattern" viewBox={toLeft + "," + toTop + "," + c + "," + magnify} width={control.bodiceDesignWidth} height={control.bodiceDesignHeight}>

                                        <image height="20" width="20" href={designFront} />

                                    </pattern>}



                                {useDesign === "pattern" &&

                                    <pattern id="bodicepattern" viewBox="0,0,10,10" width='20%' height='20%'>


                                        <polygon style={{ fill: control.longsleeveColor }} points="0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2" />

                                        {/* <circle .......
                                  <rect ........
                                  <path ..... for the people to designFront the shape that they want to pattern */}



                                    </pattern>}

                            </defs>

                            <path id="plain-right" d="M162.18,85.51c-7.05-26,7.79-58.94,9.35-62.44,0-.06.09-.25.12-.3h0C174.65,57.29,163.34,82.88,162.18,85.51Z" />

                            <path id="plain-main" d={x} />

                            <path id="plain-left" d="M10.48,85.51C9.33,82.88-2,57.29,1,22.78H1s.08.24.11.3C2.7,26.57,17.53,59.54,10.48,85.51Z" />

                        </svg>

                        ://BACKSIDE

                        <svg style={styles} viewBox="0 0 172.66 250.99">

                            <defs>

                                {useDesign === "image" &&

                                    <pattern id="back-bodicepattern" viewBox={toLeft + "," + toTop + "," + c + "," + magnify} width={control.bodiceDesignWidth} height={control.bodiceDesignHeight}>

                                        <image height="20" width="20" href={designBack} />

                                    </pattern>
                                }



                                {useDesign === "pattern" &&

                                    <pattern id="back-bodicepattern" viewBox="0,0,10,10" width='20%' height='20%'>

                                        <polygon style={{ fill: 'rgb(135, 228, 155)' }} points="0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2" />
                                        {/* <circle .......
                                      <rect ........
                                      <path ..... for the people to designFront the shape that they want to pattern */}

                                    </pattern>
                                }

                            </defs>
                            <path id="back-plain-right" d="M162.18,85.51c-7.05-26,7.79-58.94,9.35-62.44,0-.06.09-.25.12-.3h0C174.65,57.29,163.34,82.88,162.18,85.51Z" />

                            <path id="back-plain-main" d={x} />

                            <path id="back-plain-left" d="M10.48,85.51C9.33,82.88-2,57.29,1,22.78H1s.08.24.11.3C2.7,26.57,17.53,59.54,10.48,85.51Z" />

                        </svg>
                    }

                </div>
            }


            {form === "plain3" &&


                <svg style={{ ...styles, top: top - 7, strokeWidth: 1.8 }} viewBox="0 0 291.1 470.95">

                    <path id="plain-right" d="M273.74,155.09c-11.92-43.89,13.15-99.61,15.8-105.53,0-.1.14-.41.19-.49a0,0,0,0,1,0,0h0C294.81,107.4,275.69,150.64,273.74,155.09Z" />

                    <path id="plain-left" d="M17.37,155.09c-2-4.45-21.07-47.69-16-106h0c0,.08.15.39.19.49C4.22,55.48,29.29,111.2,17.37,155.09Z" />

                    <path id="plain-main" d={y} />

                </svg>
            }



        </div>
    )
}

export default Bodice


// const x = "M123.9.58s39.61,15.51,47.38,22.23c0," +

// "0-.09.24-.12.3-1.56,3.5-16.4,36.47-9.35,62.44," +

// "0,0-12.23,23.61-7.92,70,0,0,11.72,46.71,9.13,72.91-1.36," +

// "13.8-43,22.1-77.06,22.1s-75.69-8.3-77.06-22.1C6.32,202.23," +

// "18,155.52,18,155.52c4.31-46.36-7.93-70-7.93-70," +

// "7-26-7.78-58.94-9.35-62.44,0-.06-.08-.25-.11-.3C8.45," +

// "16.08,48,.58,48,.58S80," + getTopline() + ",123.9.58Z"
