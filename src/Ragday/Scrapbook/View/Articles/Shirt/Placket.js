import React, { useContext, useEffect } from 'react'
import { Brim } from '../../../State/Control'

function Placket({ size, top, axis, onScreen, form, color, side }) {
  const [control, setcontrol] = useContext(Brim)


  const select = () => { setcontrol({ ...control, selected: "placket" }) }


  function getX() {

    let x = 0;
    if (control.necklineOnScreen === true) {

      switch (control.necklineForm) {

        case "vneck": x = 34; break;
        case "fluffyneck": x = 30; break;
        case "dipped": x = 20; break;
        case "tall": x = 30; break;
        case "wideneck": x = 30; break;

        default: x = 0; break;
      }
    }
    if (control.hoodOnScreen === true) { x = 20 }

    return x
  }



  function getY() {

    let y = 74;
    if (control.necklineOnScreen === true) {

      switch (control.necklineForm) {

        case "vneck": y = 66; break;
        case "fluffyneck": y = 67; break;
        case "dipped": y = 70; break;
        case "tall": y = 67; break;
        case "wideneck": y = 67; break;

        default: y = 74; break;
      }
    }
    if (control.hoodOnScreen === true) { y = 70 }

    return y
  }


  function getZ() {

    let z = ""
    if (control.necklineOnScreen === true) {

      switch (control.necklineForm) {

        case "dipped": z = 2; break;

        default: z = ""; break;
      }
    }

    return z
  }


  const styles = {
    left: axis,
    top: top + getX(),
    zIndex: 2,
    width: size,
  }


  const adjust = () => {

    let x = "hidden"

    if (control.necklineForm === "crewneck" && control.necklineOnScreen === true && onScreen === true) { x = "visible" }
    if (control.collarOnScreen === true && onScreen === true) { x = "visible" }
    if (control.necklineForm === "mockneck" && onScreen === true) { x = "visible" }

    return { visibility: x }
  }




  return (
    <div onClick={select} style={{ visibility: onScreen === true ? "visible" : "hidden" }}>


      {/* BUTTON PLACKET */}


      {form === "button" &&

        <div>

          {side === "front" ?

            //FRONTSIDE

            <svg style={{ ...styles, width: size - 15, left: axis + 9, top: top + 10 }} viewBox="0 0 43.52 655.15">
              <g>

                <path d={"M43.51,650.37l-9.65.27L32.95,4" + getZ() + ".21a8.37,8.37,0,0,1,1-4"}
                  style={{ fill: "none", stroke: "#000" }} />

                <path d={"M0,650.35l9.65.27L10.57,4" + getZ() + ".2a8.37,8.37,0,0,0-1-4"}
                  style={{ fill: "none", stroke: "#000" }} />

              </g>

              <g style={{ fill: color, stroke: control.bodiceColorFront === "#1A1A1A" ? "lightgrey" : "#1A1A1A" }}>

                <circle cx="21.59" cy="62.16" r="5.49" />
                <circle cx="21.59" cy="138.99" r="5.49" />
                <circle cx="21.59" cy="212.41" r="5.49" />
                <circle cx="21.59" cy="290.24" r="5.49" />
                <circle cx="21.59" cy="385.07" r="5.49" />
                <circle cx="21.59" cy="475.9" r="5.49" />
                <circle cx="21.59" cy="555.85" r="5.49" />
                <circle cx="21.59" cy="625.14" r="5.49" />

              </g>

            </svg>

            : //BACKSIDE

            <svg />
          }
        </div>
      }







      {/* ZIP PLACKET */}


      {
        form === "zip" &&

        <div>
          {side === "front" ?

            < svg style={styles} viewBox="0 0 85.27 1077.95">

              <g>

                <path d={"M67," + getY() + "7l-9.65.42L56.44,71.64a18.85,18.85,0,0,1,1-6.12L77"}
                  style={{ fill: "none", stroke: "#000" }} />

                <path d={"M23.48," + getY() + "0.19l9.65.26L34,44.56a7.46,7.46,0,0"}
                  style={{ fill: "none", stroke: "#000" }} />

              </g>

              <g style={{ fill: color, stroke: control.bodiceColorFront === "#1A1A1A" ? "lightgrey" : "#1A1A1A" }}>
                <rect x="43" y="54.92" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="37.62" y="46.22" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="43" y="72.48" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="37.51" y="63.7" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="43" y="89.97" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="37.62" y="81.27" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="43" y="107.53" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="37.51" y="98.75" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="43" y="125.02" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="37.62" y="116.32" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="43" y="142.58" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="37.51" y="133.8" width="7.57" height="5.52" rx="1.87" ry="1.87" />

                <rect x="44.15" y="160.12" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="38.77" y="151.42" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="44.15" y="177.68" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="38.66" y="168.9" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="44.15" y="195.17" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="38.77" y="186.47" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="44.15" y="212.73" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="38.66" y="203.95" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="44.15" y="230.21" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="38.77" y="221.52" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="44.15" y="247.78" width="7.57" height="5.52" rx="1.87" ry="1.87" />
                <rect x="38.66" y="239" width="7.57" height="5.52" rx="1.87" ry="1.87" />

                <rect x="43.91" y="263.71" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="38.74" y="255.36" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="43.91" y="280.57" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="38.63" y="272.14" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="43.91" y="297.35" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="38.74" y="289" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="43.91" y="314.21" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="38.63" y="305.78" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="43.91" y="330.99" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="38.74" y="322.64" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="43.91" y="347.86" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="38.63" y="339.42" width="7.27" height="5.3" rx="2.35" ry="2.35" />

                <rect x="45.01" y="364.69" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="39.84" y="356.34" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.01" y="381.55" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="39.74" y="373.12" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.01" y="398.33" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="39.84" y="389.98" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.01" y="415.19" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="39.74" y="406.76" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.01" y="431.97" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="39.84" y="423.62" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.01" y="448.84" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="39.74" y="440.4" width="7.27" height="5.3" rx="2.35" ry="2.35" />

                <rect x="45.46" y="466.47" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="40.29" y="458.12" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.46" y="483.34" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="40.18" y="474.9" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.46" y="500.12" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="40.29" y="491.77" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.46" y="516.98" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="40.18" y="508.55" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.46" y="533.76" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="40.29" y="525.41" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="45.46" y="550.62" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="40.18" y="542.19" width="7.27" height="5.3" rx="2.35" ry="2.35" />

                <rect x="46.56" y="567.45" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="41.39" y="559.1" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="46.56" y="584.32" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="41.29" y="575.88" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="46.56" y="601.1" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="41.39" y="592.75" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="46.56" y="617.96" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="41.29" y="609.53" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="46.56" y="634.74" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="41.39" y="626.39" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="46.56" y="651.6" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="41.29" y="643.17" width="7.27" height="5.3" rx="2.35" ry="2.35" />

                <rect x="43.68" y="666.74" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                <rect x="38.51" y="658.39" width="7.27" height="5.3" rx="2.35" ry="2.35" />



                <g style={adjust()}>

                  <rect x="43.68" y="683.6" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                  <rect x="38.41" y="675.17" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                  <rect x="43.68" y="700.38" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                  <rect x="38.51" y="692.03" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                  <rect x="43.68" y="717.24" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                  <rect x="38.41" y="708.81" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                  <rect x="43.68" y="734.02" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                  <rect x="38.51" y="725.68" width="7.27" height="5.3" rx="2.35" ry="2.35" />
                </g>

              </g>

              <g style={{ fill: color, stroke: control.bodiceColorFront === "#1A1A1A" ? "lightgrey" : "#1A1A1A" }}>

                <path d="M54.17,72.57v33.14a9.09,9.09,0,1,0-18.18,0V72.57q0,.54,0,1.11c.47,5.6,4.33,12.26,9,12.26s8.58-6.65,9-12.26Q54.17,73.11,54.17,72.57Z" />

                <path d="M54.17,105.71a9.09,9.09,0,1,1-9.09-9.09A9.08,9.08,0,0,1,54.17,105.71Z"
                  style={{ fill: "none" }} />

                <path d="M61.25,56.42a16.15,16.15,0,0,1-7.08,13.35v2.8a11.16,11.16,0,0,0-3.21-8V41.37A16.3,16.3,0,0,1,61.25,56.42Z" />

                <path d="M39.2,41.34V64.58a11.16,11.16,0,0,0-3.21,8v-2.8A16.17,16.17,0,0,1,39.2,41.34Z" />

                <rect x="39.2" y="35.69" width="11.76" height="36.88" />

                <path d="M54.17,105.71a9.09,9.09,0,1,1-9.09-9.09A9.08,9.08,0,0,1,54.17,105.71Z"
                  style={{ fill: "none" }} />

                <path d="M54.17,72.57q0,.54,0,1.11c-.46,5.6-4.33,12.26-9,12.26s-8.57-6.65-9-12.26q0-.57,0-1.11a11.16,11.16,0,0,1,3.21-8v8H51v-8A11.16,11.16,0,0,1,54.17,72.57Z" style={{ fill: "none" }} />
              </g>

            </svg>

            : <svg />}

        </div>


      }





    </div >
  )

}

export default Placket
