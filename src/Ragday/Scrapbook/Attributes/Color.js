import React, { useContext, useState } from 'react';
import { Brim } from '../State/Control';


const Color = () => {

    const [control, setcontrol] = useContext(Brim)
    const [palette, setpalette] = useState([

        "white",
        "grey",
        "dodgerblue",
        "yellow",
        "rgb(135, 228, 155)",
        "#ed1c24",
        "#1A1A1A",
        "brown",
        "pink",
        "orange",
    ])

    const [reserve] = useState([
        "#ff42bf",
        "steelblue",
        "crimson",
    ])





    const updatepalette = (newColor) => {
        let x = 0;

        setpalette([reserve[x], ...palette])

        x++;
    }


    const handleClick = e => {

        palette.map((eachColor) => {
            if (eachColor === e.target.id) {

                setcontrol({ ...control, [`${control.selected}Color`]: eachColor })


                switch (control.selected) {

                    case "bodice":
                        (control.shirtSide === "front") ?
                            setcontrol({ ...control, bodiceDesignFront: "", bodiceColorFront: eachColor, })
                            : setcontrol({ ...control, bodiceDesignBack: "", bodiceColorBack: eachColor }); break;


                    case "longsleeve":
                        (control.shirtSide === "front") ?
                            setcontrol({ ...control, longsleeveDesignFront: "", longsleeveColorFront: eachColor, })
                            : setcontrol({ ...control, longsleeveDesignBack: "", longsleeveColorBack: eachColor }); break;


                    case "shortsleeve":
                        (control.shirtSide === "front") ?
                            setcontrol({ ...control, shortsleeveDesignFront: "", shortsleeveColorFront: eachColor, })
                            : setcontrol({ ...control, shortsleeveDesignBack: "", shortsleeveColorBack: eachColor }); break;

                    default: break;

                }
            }
        })

    }





    return (
        <div>
            <div className="color">
                <button id="new-color" onClick={updatepalette}>+</button>
                {palette.map((btn) => <button id={btn} onClick={handleClick} style={{ background: btn }} />)}
            </div>

            {/* <hr style={{ width: '100%', marginTop: '20px' }} />

            <div id="extra-color">

                <div id="color-picker" className="color-picker">
                    <div id="color-wheel"></div>
                    <div id="color-values">
                        R: <input /><br />
                        G: <input /><br />
                        B: <input />
                    </div>
                </div>

            </div> */}
        </div>
    )
}
export default Color