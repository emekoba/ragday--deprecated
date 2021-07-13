import React, { useContext } from 'react'
import { Brim } from '../../../State/Control'


function LongsleeveSize() {
    const [control] = useContext(Brim)


    const length =
    {
        width: 50,
        left: 385,
        top: 165,
        strokeWidth: 0

    }

    const wrist =
    {
        width: 50,
        left: 60,
        top: 360,
    }

    const elbow =
    {
        width: 55,
        left: 338,
        top: 250,
    }

    const shoulderToElbow =
    {
        zIndex: 5,
        width: 12,
        left: 35,
        top: 95,

    }

    const elbowToWrist =
    {
        zIndex: 5,
        width: "12px",
        left: "22px",
        top: "163px",

    }





    return (
        <div style={{ display: control.longsleeveOnScreen === true ? "" : "none" }}>

            <svg style={{ ...wrist, zIndex: 5 }} viewBox="0 0 88.43 29.21"><path style={{ fill: control.longsleeveColorFront === "#1A1A1A" || control.longsleeveColorBack === "#1A1A1A" ? "white" : "#1A1A1A" }} d="M7.44,7.44c-.69,2.11-1,.61.51.65,1,0,2.3-.38,3.36-.46a71,71,0,0,1,8.65,0,183.23,183.23,0,0,1,25.52,3.2,187.24,187.24,0,0,1,24.06,6A61,61,0,0,1,77.62,20a21.5,21.5,0,0,1,3,1.68c1.07.76.31.85.36-.28-.23,4.82,7.27,4.81,7.5,0,.25-5.3-7-8-10.84-9.56-10.21-4.17-21.2-6.62-32-8.57C35.25,1.37,24.6-.19,14.09,0,9.5.11,2,.08.21,5.45-1.3,10,5.94,12,7.44,7.44Z" /></svg>

            <svg style={wrist} viewBox="0 0 88.43 29.21"><path d="M.56,6.32c-.35,5.82,6.88,8.89,11.22,10.74,9.55,4.07,19.78,6.58,29.94,8.58s20.7,3.66,31.1,3.57c5.4,0,13.13-.22,15.23-6.31s-7.56-8.72-9.64-2.66c1.11-3.23,2.22-1.37.11-1.46-.53,0-1.77.25-2.28.3a62.46,62.46,0,0,1-8.81,0,169.62,169.62,0,0,1-24.93-3.45,168.73,168.73,0,0,1-22.68-6.1,48.77,48.77,0,0,1-7.39-3.15c-.61-.34-1.5-1.19-2.13-1.3-1-.17.41-1.18.26,1.26.39-6.43-9.61-6.41-10,0Z" style={{ fill: '#ccc' }} /></svg>

            <svg style={{ ...elbow, zIndex: 5 }} viewBox="0 0 93.03 44.19"><path style={{ fill: control.longsleeveColorFront === "#1A1A1A" || control.longsleeveColorBack === "#1A1A1A" ? "white" : "#1A1A1A" }} d="M7.51,37.11c-.13-3.07,8-7.33,10.31-8.73a151.35,151.35,0,0,1,25.76-12A163.76,163.76,0,0,1,71.44,8.51a54.48,54.48,0,0,1,10.08-1,12,12,0,0,1,3.61.36c1,.33.7.58.56,0,1.07,4.71,8.3,2.71,7.23-2C91.53-.29,83.14-.21,78.27.12,66.35,1,54.52,4.5,43.33,8.51,32.47,12.41,21.56,17,11.83,23.27,7.33,26.17-.26,30.86,0,37.11c.21,4.81,7.71,4.83,7.5,0Z" /></svg>

            <svg style={elbow} viewBox="0 0 93.03 44.19"><path d="M.61,37.18c1.44,6.66,10,7.19,15.39,7,11.29-.47,22.6-3.59,33.25-7.18s21.52-8,31.12-14c5-3.14,12.8-8.08,12.57-14.92-.22-6.42-10.22-6.45-10,0a17.16,17.16,0,0,1-2.28,2.45A46.13,46.13,0,0,1,73,15.7a140.74,140.74,0,0,1-24.66,11,142.44,142.44,0,0,1-26.67,6.9,43.18,43.18,0,0,1-9.4.53,9.32,9.32,0,0,1-2.68-.47,2.48,2.48,0,0,1,.62.85C8.89,28.24-.75,30.9.61,37.18Z" style={{ fill: '#ccc' }} /></svg>

            <svg style={length} viewBox="0 0 73.08 281.51">
                <path style={{ fill: control.longsleeveColorFront === "#1A1A1A" || control.longsleeveColorBack === "#1A1A1A" ? "white" : "#1A1A1A" }} d="M12.82,6.43,29.88,97.16,57.07,241.72l6.23,33.12c1.19,6.32,10.83,3.64,9.64-2.66L55.88,181.46,28.69,36.89,22.46,3.77C21.28-2.54,11.64.13,12.82,6.43Z" />
                <path style={{ fill: control.longsleeveColorFront === "#1A1A1A" || control.longsleeveColorBack === "#1A1A1A" ? "white" : "#1A1A1A" }} d="M68.38,271.22l-15.09,3c-4.73.93-2.73,8.16,2,7.23l15.09-3c4.73-.93,2.73-8.16-2-7.23Z" />
                <path style={{ fill: control.longsleeveColorFront === "#1A1A1A" || control.longsleeveColorBack === "#1A1A1A" ? "white" : "#1A1A1A" }} d="M17.65.08,2.7,3C-2,4,0,11.19,4.7,10.26L19.64,7.31c4.73-.93,2.73-8.16-2-7.23Z" />
            </svg>

        </div>
    )
}

export default LongsleeveSize
