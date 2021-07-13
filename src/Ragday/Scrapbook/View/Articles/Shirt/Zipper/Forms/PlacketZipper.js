import React, { useContext, useEffect,} from 'react'
import { Brim } from '../../../../../State/Control'


function PlainZipper() {
const [control,]= useContext(Brim)


useEffect(()=>{ 

    let left = document.getElementById("placket-left");
        left.style.fill = control.zipperColor;

    let right = document.getElementById("placket-right");
        right.style.fill = control.zipperColor; 

}) 




const styles = {
    left: 124,
    top: 93,
    zIndex: 3,
    width: "24px",
    // strokeWidth:"2px",
}     


return (

<svg style= {styles} viewBox="0 0 85.17 656.9">
 
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_2-2" data-name="Layer 2">
      <path d="M69.43,43.66" 
      style={{fill: "#666"}}/>
      <g>
        <path id="placket-right" d="M67,654.21l-9.65.26-.9-609.89a7.46,7.46,0,0,1,1-3.71L77,6.85c1.75-3,5.27-3.83,7.85-1.78h0" 
        style={{stroke: '#000', strokeMiterlimit: 10}}/>

        <path id="placket-left" d="M23.48,654.19l9.65.26L34,44.56a7.46,7.46,0,0,0-1-3.71L10.14,5.4a5.48,5.48,0,0,0-9.5.48c-.11.23-.16.36-.16.36" 
        style={{stroke: '#000', strokeMiterlimit: 10}}/>

      </g>
      <g>
        <g>
          <g>
            <g>
              <rect x="42.98" y="54.92" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="37.6" y="46.22" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="42.98" y="72.48" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="37.49" y="63.7" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="42.98" y="89.97" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="37.6" y="81.27" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="42.98" y="107.53" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="37.49" y="98.75" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="42.98" y="125.02" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="37.6" y="116.32" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="42.98" y="142.58" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <rect x="37.49" y="133.8" width="7.57" height="5.52" rx="1.87" ry="1.87" 
              style={{fill: '#666'}}/>

              <g>
                <rect x="44.13" y="160.12" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="38.75" y="151.42" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="44.13" y="177.68" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="38.64" y="168.9" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="44.13" y="195.17" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="38.75" y="186.47" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="44.13" y="212.73" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="38.64" y="203.95" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="44.13" y="230.21" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="38.75" y="221.52" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="44.13" y="247.78" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

                <rect x="38.64" y="239" width="7.57" height="5.52" rx="1.87" ry="1.87" 
                style={{fill: '#666'}}/>

              </g>
            </g>
            <g>
              <rect x="35.04" y="36.72" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(87.43 66.36) rotate(163.48)" 
              style={{fill: '#666'}}/>

              <rect x="30.04" y="26.38" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(-9.41 17.98) rotate(-26.23)" 
              style={{fill: '#666'}}/>

              <rect x="24.82" y="17.68" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(-6.37 16.78) rotate(-29.5)" 
              style={{fill: '#666'}}/>

              <rect x="18.8" y="8.75" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(-2.42 15.82) rotate(-36.67)" 
              style={{fill: '#666'}}/>

              <rect x="12.2" y="1.23" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(1.68 12.25) rotate(-43.84)" 
              style={{fill: '#666'}}/>

              <rect x="45.19" y="36.59" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(13.23 -12.32) rotate(16.52)" 
              style={{fill: '#666'}}/>

              <rect x="50.19" y="26.25" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(89.7 79.01) rotate(-153.77)" 
              style={{fill: '#666'}}/>

              <rect x="55.41" y="17.55" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(100.83 67.26) rotate(-150.5)" 
              style={{fill: '#666'}}/>

              <rect x="61.43" y="8.62" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(110.84 59.59) rotate(-143.33)" 
              style={{fill: '#666'}}/>

              <rect x="68.03" y="1.1" width="7.71" height="5.62" rx="1.9" ry="1.9" transform="translate(121.03 56.52) rotate(-136.16)" 
              style={{fill: '#666'}}/>

            </g>
          </g>
          <g>
            <g>
              <rect x="43.89" y="263.71" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="38.72" y="255.36" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="43.89" y="280.57" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="38.61" y="272.14" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="43.89" y="297.35" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="38.72" y="289" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="43.89" y="314.21" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="38.61" y="305.78" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="43.89" y="330.99" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="38.72" y="322.64" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="43.89" y="347.86" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="38.61" y="339.42" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <g>
                <rect x="44.99" y="364.69" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="39.82" y="356.34" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="44.99" y="381.55" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="39.72" y="373.12" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="44.99" y="398.33" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="39.82" y="389.98" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="44.99" y="415.19" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="39.72" y="406.76" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="44.99" y="431.97" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="39.82" y="423.62" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="44.99" y="448.84" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="39.72" y="440.4" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

              </g>
            </g>
            <g>
              <rect x="45.44" y="466.47" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="40.27" y="458.12" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="45.44" y="483.34" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="40.16" y="474.9" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="45.44" y="500.12" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="40.27" y="491.77" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="45.44" y="516.98" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="40.16" y="508.55" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="45.44" y="533.76" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="40.27" y="525.41" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="45.44" y="550.62" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <rect x="40.16" y="542.19" width="7.27" height="5.3" rx="2.35" ry="2.35" 
              style={{fill: '#666'}}/>

              <g>
                <rect x="46.54" y="567.45" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="41.37" y="559.1" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="46.54" y="584.32" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="41.27" y="575.88" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="46.54" y="601.1" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="41.37" y="592.75" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="46.54" y="617.96" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="41.27" y="609.53" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="46.54" y="634.74" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                 <rect x="41.37" y="626.39" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                <rect x="46.54" y="651.6" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/>

                {/*<rect x="41.27" y="643.17" width="7.27" height="5.3" rx="2.35" ry="2.35" 
                style={{fill: '#666'}}/> */}

              </g>
            </g>
          </g>
        </g>
        <g>
          <path d="M54.15,72.57v33.14a9.09,9.09,0,1,0-18.18,0V72.57q0,.54,0,1.11c.47,5.6,4.33,12.26,9,12.26s8.58-6.65,9-12.26Q54.15,73.11,54.15,72.57Z" 
          style={{fill: '#203b42',stroke: '#000',strokeMiterlimit: 10}}/>
          <path d="M54.15,105.71a9.09,9.09,0,1,1-9.09-9.09A9.08,9.08,0,0,1,54.15,105.71Z" 
          style={{fill: 'none',stroke: '#000',strokeMiterlimit: 10}}/>
          <path d="M61.23,56.42a16.15,16.15,0,0,1-7.08,13.35v2.8a11.16,11.16,0,0,0-3.21-8V41.37A16.3,16.3,0,0,1,61.23,56.42Z" 
          style={{fill: '#203b42',stroke: '#000',strokeMiterlimit: 10}}/>
          <path d="M39.18,41.34V64.58a11.16,11.16,0,0,0-3.21,8v-2.8a16.17,16.17,0,0,1,3.21-28.43Z" 
          style={{fill: '#203b42',stroke: '#000',strokeMiterlimit: 10}}/>
          <rect x="39.18" y="35.69" width="11.76" height="36.88" 
          style={{fill: '#203b42',stroke: '#000',strokeMiterlimit: 10}}/>
          <path d="M54.15,105.71a9.09,9.09,0,1,1-9.09-9.09A9.08,9.08,0,0,1,54.15,105.71Z" 
          style={{fill: 'none',stroke: '#000',strokeMiterlimit: 10}}/>
          <path d="M54.15,72.57q0,.54,0,1.11c-.46,5.6-4.33,12.26-9,12.26s-8.57-6.65-9-12.26q0-.57,0-1.11a11.16,11.16,0,0,1,3.21-8v8H50.94v-8A11.16,11.16,0,0,1,54.15,72.57Z" 
          style={{fill: 'none',stroke: '#000',strokeMiterlimit: 10}}/>
        </g>
      </g>
    </g>
  </g>
</svg>


)}

export default PlainZipper
