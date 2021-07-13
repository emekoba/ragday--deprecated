import React, { useContext, useEffect } from 'react'
import { Brim } from '../../State/Control'

export default function Material({ id, form, size, onScreen, top, axis, color, design }) {
    const [control, setcontrol] = useContext(Brim)

    useEffect(() => {
        let path = document.getElementById("mat" + id)
        if (!design === false) path.style.fill = 'url(#materialpattern)';
        else { path.style.fill = color }
    })

        // let object;
        // useEffect(()=>{
        //     object = document.getElementById("material")
        //     object.addEventListener("mousedown", mouseDown)
        // })
        
        
        // function mouseDown(e){
        
        //     window.addEventListener('mousemove', mouseMove)
        //     window.addEventListener('mouseup', mouseUp)
        
        
        //     let prevX = e.clientX;
        //     let prevY = e.clientY;
        
        
        //     function mouseMove(e){
        //         let newX = prevX - e.clientX
        //         let newY = prevY - e.clientY
        
        //         const rect = object.getBoundingClientRect();
        
        //         object.style.left = rect.left - newX + "px";
        //         object.style.top = rect.top - newY + "px";
        
        //         prevX = e.clientX;
        //         prevY = e.clientY;
        //     }
        
        //     function mouseUp(){
        //         window.removeEventListener('mousemove', mouseMove)
        //         window.removeEventListener('mouseup', mouseUp)
        //     }
        
        
            
        // }



    const styles = {
        zIndex: 2,
        top: control.necklineForm === 'dipped' ? top + 5 : top,
        left: axis,
        width: size,
    }

    let y = 5;


    let x =
        "M47.5,122.47V.63L24," + y
        + ".11.5.63V122.47S24,131.8,47.5,122.47Z"



    return (
        <div onClick={() => setcontrol({ ...control, selected: "material" })} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>

            <svg style={styles} id="material" viewBox="0 0 48 127.12">

                <defs>
                    <pattern id="materialpattern" viewBox="1,1,1,1" width='100%' height='30%'>
                        {/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
                        <image height="10" width="10" href={design} />
                    </pattern>
                </defs>

                <path id={"mat" + id} d={x} />

            </svg>

        </div>
    )
}
