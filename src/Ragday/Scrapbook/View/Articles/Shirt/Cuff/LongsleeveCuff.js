import React, { useContext, useEffect } from 'react'
// import { Brim } from '../../../../State/Control'

function LongsleeveCuff({contrast, size, top, axis_L, axis_R, form, color}) {
// const[control, setcontrol] = useContext(Brim)


useEffect(()=>{ 

    let rightMain = document.getElementById("cuff-right-main");
        rightMain.style.fill = color 
    
    
    let leftMain = document.getElementById("cuff-left-main");
        leftMain.style.fill = color 

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

return (
<div>

{/* PLAIN */}
{
    
}


{/* BAND */}
{form === "band" &&

<div>

<svg style={stylesLeft} viewBox="0 0 172.44 150.67">

{/* <path d="M172.85,36.65l-3.64,15.3s-2.36-1.68-6.75-4.3a227,227,0,0,0-55.69-23.39h0a211.42,211.42,0,0,0-39.57-6.85h0a192.06,192.06,0,0,0-55.89,3.85q-4.34.94-8.73,2.13L5.23,7.46S81.59-16.71,172.85,36.65Z" 
style={{fill: contrast === false ? color : "#e6e6e6", strokeWidth: 4}}/> */}


<path id="cuff-left-main" d="M162.47,47.65l-1,5.74L153.4,74.22a196.87,196.87,0,0,0-10.82,40.18l-2.14,13.49c.41-5.7-26.12-15.2-67.78-22.28-41-7-63.72-8-65.12-2.62L12.8,74.61A118.63,118.63,0,0,0,13.3,34.1L11.23,21.25A192.06,192.06,0,0,1,67.12,17.4h0c13.74,1.68,27.23,4.16,39.57,6.85h0A227,227,0,0,1,162.47,47.65Z"
style={{strokeWidth: 4}}/>

<path d="M140.44,127.89c-.37,5.32-25.47,5.14-64.3-1.47S7.15,108.3,7.53,103l0-.24c1.31-5,31.74-2.09,70,4.41C116.36,113.76,140.83,122.57,140.44,127.89Z" 
style={{fill: '#e6e6e6', strokeWidth: 4}}/>

</svg>


<svg style={stylesRight} viewBox="0 0 172.44 150.67">

{/* <path d="M2.29,36.65l3.64,15.3s2.36-1.68,6.75-4.3A227,227,0,0,1,68.37,24.26h0A211.42,211.42,0,0,1,108,17.41h0a192.06,192.06,0,0,1,55.89,3.85q4.34.94,8.73,2.13L169.92,7.46S93.55-16.71,2.29,36.65Z" 
style={{fill: contrast === false ? color : "#e6e6e6", strokeWidth: 4}}/> */}


<path id="cuff-right-main"d="M12.67,47.65l1,5.74,8.06,20.83A196.87,196.87,0,0,1,32.56,114.4l2.14,13.49c-.41-5.7,26.12-15.2,67.78-22.28,41-7,63.72-8,65.12-2.62l-5.27-28.37a118.63,118.63,0,0,1-.49-40.52l2.07-12.84A192.06,192.06,0,0,0,108,17.4h0c-13.74,1.68-27.23,4.16-39.57,6.85h0A227,227,0,0,0,12.67,47.65Z"
style={{strokeWidth: 4}}/>


<path d="M34.7,127.89c.37,5.32,25.47,5.14,64.3-1.47S168,108.3,167.61,103l0-.24c-1.31-5-31.74-2.09-70,4.41C58.78,113.76,34.32,122.57,34.7,127.89Z" 
style={{fill: '#e6e6e6', strokeWidth: 4}}/>


</svg>


</div>}


</div>
)
}

export default LongsleeveCuff
