import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Collar({ id, contrast, side, stroke, top, axis, onScreen, form, color, size }) {
    const [control, setcontrol] = useContext(Brim)

    // useEffect(()=>{ 

    //     if( control.necklineOnScreen === true ) setcontrol({...control,necklineOnScreen: false})
    //     if( control.hoodOnScreen === true) setcontrol({...control,hoodOnScreen: false})
    
    // })

    const select = () => { setcontrol({ ...control, selected: "collar" }) }

    useEffect(() => {

        if (side === "front") {

            let frontLapel1 = document.getElementById("front-lapel1" + id);
            frontLapel1.style.fill = color;
            frontLapel1.style.stroke = control.bodiceColorFront === '#1A1A1A' && control.collarColor === '#1A1A1A' ? 'white' : '#1A1A1A'

            let frontLapel2 = document.getElementById("front-lapel2" + id);
            frontLapel2.style.fill = color;
            frontLapel2.style.stroke = control.bodiceColorFront === '#1A1A1A' && control.collarColor === '#1A1A1A' ? 'white' : '#1A1A1A'

        }
    })


    // useEffect(() => {

    //     if (side === "back"){

    //     let backLapel1 = document.getElementById("back-lapel1" + id);
    //     backLapel1.style.fill = color;
    //     backLapel1.style.stroke = control.bodiceColorFront === 'black' && control.collarColor === 'black' ? 'white' : 'black'

    //     let backLapel2 = document.getElementById("back-lapel2" + id);
    //     backLapel2.style.fill = color;
    //     backLapel2.style.stroke = control.bodiceColorFront === 'black' && control.collarColor === 'black' ? 'white' : 'black'

    //     }

    // })




    const styles = {
        width: size,
        left: axis,
        top: top,
        zIndex: 3,
        strokeWidth: stroke

    }



    return (
        <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>



            {/* CLUB */}
            {form === "club" &&

                <div>

                    {/* {side === "front" ?

                        //FRONTSIDE */}

                    <svg style={styles} viewBox="0 0 52.87 37.35">

                        <defs>
                            <pattern id="star" viewBox="0,0,10,10" width='30%' height='10%'>
                                <polygon points="0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2" />
                            </pattern>
                        </defs>

                        <path d="M26.44,19.46a1,1,0,0,0-.24,0,.78.78,0,0,0-.26,0h0C22.49,18.74,3.68,14.8,5.14,4.06a65.34,65.34,0,0,1,42.6,0S49.44,13,26.44,19.46Z"
                            style={{ fill: "#e6e6e6" }} />

                        <path d="M32.16,25.8l-11.46,0c1.08-2.76,1.71-5,1.71-5a4.48,4.48,0,0,1,3.5-1.53h0a.78.78,0,0,1,.26,0,1,1,0,0,1,.24,0,4.32,4.32,0,0,1,4,1.44S31.09,23.07,32.16,25.8Z"
                            style={{ fill: contrast === false ? color : "white", stroke: control.bodiceColorFront === '#1A1A1A' && control.collarColor === '#1A1A1A' ? 'white' : '#1A1A1A' }} />

                        <circle id="button" cx="26.31" cy="22.54" r="1.17"
                            style={{ fill: "white" }} />


                        <path id={"front-lapel1" + id} d="M25.91,19.37a4.48,4.48,0,0,0-3.5,1.53s-.63,2.19-1.71,5c-2,5-5.36,11.87-9.12,10.9C5.75,35.25-.25,24.25.58,21.91s2.17-7.5,2.17-7.5S3,3.54,5.14,4.06C3.68,14.8,22.49,18.74,25.91,19.37Z"
                        /*style= {{fill: "url(#star)"}}*/ />

                        <path id={"front-lapel2" + id} d="M41.3,36.75c-3.77,1-7.19-5.94-9.14-10.95-1.07-2.73-1.69-4.9-1.69-4.9a4.32,4.32,0,0,0-4-1.44c23-6.5,21.3-15.4,21.3-15.4,2.1-.52,2.39,10.35,2.39,10.35s1.34,5.17,2.17,7.5S47.13,35.25,41.3,36.75Z" />

                    </svg>

                    {/* : //BACKSIDE

                        <svg style={{ ...styles, width: "35%" }} viewBox="0 0 123.29 53.79">


                            <path id={"back-lapel1" + id} d="M32.54,24.25c-.59.09-1.14.15-1.64.17-6.86.39-6.24,8-5.81,10.69C6.93,33.09,2,23.68.71,20.2-.59,16.55,4.53,7,5.19,5.81c0,0,0,0,0,0C2.75,15.23,23.84,23.41,32.54,24.25Z" />

                            <path id={"back-lapel2" + id} d="M63,19.45c-1.29,3.71-4.82,13.31-30.54,16q-3.32.35-7.16.55s-.09-.35-.18-.93C24.66,32.42,24,24.81,30.9,24.42c.5,0,1-.09,1.64-.17,9.17-1.32,28.6-9.35,26.69-18.6a.05.05,0,0,1,0-.06l.06,0C60.29,7.57,64.21,15.91,63,19.45Z" />

                            <path d="M32.54,24.25c-8.71-.84-29.8-9-27.33-18.43,0,0,21.93-11.82,54.05-.23a.05.05,0,0,0,0,.06C61.14,14.9,41.72,22.93,32.54,24.25Z"
                                style={{ fill: '#e6e6e6', }} />

                            <circle cx="30.58" cy="30.6" r="1.97"
                                style={{ fill: 'white' }} />

                        </svg>

                    } */}
                </div>
            }




            {/* CLUB1 */}

            {form === "club1" &&

                <svg style={styles} viewBox="0 0 64.1 39.46">

                    <path id={"front-lapel1" + id} d="M32,21a1.93,1.93,0,0,0-.37,0,2.11,2.11,0,0,0-2.1,1.49l-.06.28a1.62,1.62,0,0,1,0,.19c-.6,2.46-5.21,11.81-5.21,11.81s-3.1,6.75-12.49,3.12A18.56,18.56,0,0,1,.51,25.39l4.07-17S5,6,5.16,6.21c1,1.59,5.25,7,17.76,11.87,1.27.49,2.63,1,4.09,1.45l1.5.47,1.53.45C30.69,20.64,31.36,20.83,32,21Z" />

                    <path id={"front-lapel2" + id} d="M63.58,25.39a18.59,18.59,0,0,1-11.27,12.5c-9.38,3.63-12.48-3.12-12.48-3.12S35.21,25.42,34.62,23a1.64,1.64,0,0,1,0-.19A2.15,2.15,0,0,0,32,21c3.48-.93,6.52-1.91,9.18-2.91C55.24,12.81,58.62,7,59,6.33c0,0,0,0,0,0l.53,2.19v0Z" />

                    <path d="M41.22,18.1c-2.66,1-5.7,2-9.18,2.91-.68-.18-1.35-.37-2-.56L28.51,20,27,19.53c-1.46-.48-2.82-1-4.09-1.45C24.16,17.17,31.58,12.27,41.22,18.1Z"
                        style={{ fill: '#e6e6e6' }} />

                    <path d="M59,6.38c-.48.87-4,6.54-17.73,11.72-9.64-5.83-17.06-.93-18.3,0C10.41,13.25,6.15,7.8,5.16,6.21c0,0,22.69-12.91,53.76.1A.05.05,0,0,1,59,6.38Z"
                        style={{ fill: color }} />


                </svg>

            }




            {/* WINDSOR-SPREAD */}
            {form === "windsor-spread" &&

                <svg style={styles} viewBox="0 0 70.4 54.57">

                    <path id={"front-lapel1" + id} d="M34.45,27a66.21,66.21,0,0,1-6.81,12.23C19.55,50.66,11.09,54,11.09,54-1,35.09.57,30.31.57,30.31c1-1.15,2.7-11.85,2.7-11.85C3.1,6,6.83,4.74,6.83,4.74-1.43,16.57,31.42,26.18,34.26,27Z" />

                    <path id={"front-lapel2" + id} d="M59.3,54s-8.46-3.3-16.55-14.69A66.21,66.21,0,0,1,35.94,27l.28-.08c3.35-1,35.52-10.5,27.34-22.21,0,0,3.74,1.23,3.57,13.71,0,0,1.73,10.7,2.7,11.85C69.83,30.31,71.39,35.09,59.3,54Z" />

                    <path d="M27.64,39.27A66.21,66.21,0,0,0,34.45,27L34.26,27l0,0h1.95l-.28.08a66.21,66.21,0,0,0,6.81,12.23Z" />

                    <path d="M36.22,27H34.28l0,0C31.42,26.18-1.43,16.57,6.83,4.74c0,0,23.7-9.55,56.73,0C71.75,16.45,39.58,26,36.22,27Z"
                        style={{ fill: "#e6e6e6" }} />

                    <circle cx="35.03" cy="34.61" r="2.01" />

                </svg>}



            {/* BAND */}
            {form === "band" &&
                <svg style={{ ...styles, width: "35%" }} viewBox="0 0 123.29 53.79">


                    <path id={"front-lapel1" + id} d="M32.54,24.25c-.59.09-1.14.15-1.64.17-6.86.39-6.24,8-5.81,10.69C6.93,33.09,2,23.68.71,20.2-.59,16.55,4.53,7,5.19,5.81c0,0,0,0,0,0C2.75,15.23,23.84,23.41,32.54,24.25Z" />

                    <path id={"front-lapel2" + id} d="M63,19.45c-1.29,3.71-4.82,13.31-30.54,16q-3.32.35-7.16.55s-.09-.35-.18-.93C24.66,32.42,24,24.81,30.9,24.42c.5,0,1-.09,1.64-.17,9.17-1.32,28.6-9.35,26.69-18.6a.05.05,0,0,1,0-.06l.06,0C60.29,7.57,64.21,15.91,63,19.45Z" />

                    <path d="M32.54,24.25c-8.71-.84-29.8-9-27.33-18.43,0,0,21.93-11.82,54.05-.23a.05.05,0,0,0,0,.06C61.14,14.9,41.72,22.93,32.54,24.25Z"
                        style={{ fill: '#e6e6e6', }} />

                    <circle cx="30.58" cy="30.6" r="1.97"
                        style={{ fill: 'white', }} />

                </svg>}



            {/* EYELET */}
            {form === "eyelet" &&
                <svg style={styles} viewBox="0 0 61.56 52.19">

                    <polygon points="34.4 31.12 27.17 31.12 29.67 20.2 31.89 20.2 34.4 31.12"
                        style={{ fill: 'none', }} />

                    <circle cx="30.78" cy="26.7" r="2.1"
                        style={{ fill: '#fff', }} />

                    <path id='front-lapel1' d="M4.85,5.69C2.52,6.13.51,18.25.51,18.25s2.15,13.65,22,33l1.93-8.41,2.69-11.68,2.5-10.92.09-.39S9.53,15,4.85,5.69ZM23.28,42.78a1,1,0,1,1-1-1,1,1,0,0,1,1,1Z" />


                    <path id='front-lapel2' d="M56.74,5.65C52.09,14.94,31.8,19.81,31.8,19.81l.09.39L34.4,31.12l2.72,11.82L39,51.21c19.89-19.31,22-33,22-33S58.89,6.76,56.74,5.65ZM39.52,44a1,1,0,0,1-1-1,.09.09,0,0,1,0,0,1,1,0,0,1,1.94,0A1,1,0,0,1,39.52,44ZM56.74,5.65a6.52,6.52,0,0,0-1.39-.53Z" />

                    <path d="M23.27,42.77h0a1,1,0,1,1-1-1A1,1,0,0,1,23.27,42.78Z"
                        style={{ fill: 'red', }} />

                    <path d="M40.48,43a1,1,0,1,1-1.95,0,.09.09,0,0,1,0,0,1,1,0,0,1,1.94,0Z"
                        style={{ fill: 'red', }} />


                    <g>
                        <line x1="22.29" y1="42.77" x2="39.26" y2="42.97"
                            style={{ fill: 'none', }} />

                        <path d="M40.48,43a1,1,0,1,1-1.95,0,.09.09,0,0,1,0,0,1,1,0,0,1,1.94,0Z" />

                        <path d="M23.27,42.77h0a1,1,0,1,1-1-1A1,1,0,0,1,23.27,42.78Z" />
                    </g>

                </svg>}


            {/* STRAIGHT */}
            {form === "straight" &&

                <svg style={styles} viewBox="0 0 226.52 163.19">
                    <circle cx="116.59" cy="113.45" r="6.61"
                        style={{ fill: '#e6e6e6', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path id={"front-lapel1" + id} d="M86.35,62.82c-.12,0,20.86-7.79,54.58-.59L113.33,85Z"
                        style={{ fill: '#e6e6e6', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path d="M113.25,1.69c40.42-.4,70,3.55,84.77,6.27,17.55,3.24,16.23,29.19,16.89,31.38,0,.09,0,.17.07.26l10,49.48"
                        style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path d="M113.25,86.42s16.92-19.2,87.25-63.87c0,0,7.41-4.37-1-11.4"
                        style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path id={"front-lapel2" + id} d="M151.4,125.72,173,159.56a4.61,4.61,0,0,0,7.78,0L225,89.08"
                        style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path d="M151.4,125.72c-34.7,7.14-52,3.67-55.65,2.72h0l-.69-.2V112.09c2.88-24.13,20.38-25.8,24.31-25.86.26-3,5.15-2.67,5.15-2.67Z"
                        style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path d="M113.25,1.5C69.6,1.52,37.88,5.18,26.09,9,13.22,13.21,1.48,88.89,1.48,88.89"
                        style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path d="M113.25,86.23S96.33,67,26,22.37c0,0-7.41-4.37,1-11.4"
                        style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path d="M1.48,88.89,45.62,159.2a4.71,4.71,0,0,0,8,0L102,83.38s5.7-.38,5.13,3.42"
                        style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 3 }} />

                    <path d="M95.7,128.45c-12.69-1.93-17.63-3.87-19.39-4.79h0"
                        style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 3 }} />


                </svg>}


            {/*  */}
            {/* {form === "" &&
    } */}


        </div>
    )

}
export default Collar
