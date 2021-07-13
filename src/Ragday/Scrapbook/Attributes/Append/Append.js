import React, { useContext, useState } from 'react';
import { Brim } from '../../State/Control';
import Material from '../../View/Articles/Material';
import Button from '../../View/Articles/Shirt/Button';
import Pocket from '../../View/Articles/Shirt/Pocket';

const Append = () => {
    const [control, setcontrol] = useContext(Brim)

    const getrand = () => { return Math.floor(Math.random() * 200) + 50 }


    const appendNew = e => {

        setcontrol({ ...control, setExperiment: true })

        switch (e.target.id) {

            // case "new-material":
            //     setcontrol(p => ({
            //         ...control, material: control.material === [""] ?
            //             [
            //                 //if the material is empty, put this one that stayas in the middle
            //                 <Material
            //                     id={getrand()}
            //                     size={35}
            //                     top={230}
            //                     axis={150}
            //                     onScreen={true}
            //                     form="circle"
            //                     color="brown"
            //                     design={control.materialDesign} />]


            //             : [p.material,

            //             <Material
            //                 id={getrand()}
            //                 size={35}
            //                 top={getrand()}
            //                 axis={getrand()}
            //                 onScreen={true}
            //                 form="circle"
            //                 color="brown"
            //                 design={control.materialDesign} />]

            //     })); break;


            case "new-button":
                setcontrol(p => ({
                    ...control, button: [p.button,

                    <Button
                        id={getrand()}
                        size={10}
                        top={getrand()}
                        axis={getrand()}
                        onScreen={true}
                        form="circle"
                        color="blue" />]

                })); setcontrol({ ...control, selected: "material" }); break;


            case "new-pocket":
                setcontrol(p => ({
                    ...control, pocket: [p.pocket,

                    <Pocket
                        id={getrand()}
                        size={25}
                        top={getrand()}
                        axis={getrand()}
                        onScreen={true}
                        form="plain"
                        color="yellow" />]

                })); setcontrol({ ...control, selected: "pocket" }); break;
        }
    }



    return (
        <div className="append">

            {control.selected === "bodice" || control.selected === "long-sleeve" || control.selected === "material" ?
                <div className="append-item">
                    <button id="new-material" onClick={appendNew}>material</button>
                    <button id="new-button" onClick={appendNew}>button</button>
                    <button id="new-lace" onClick={appendNew}>lace</button>
                </div> : <div />}


            {control.selected === "neckline" &&
                <div className="append-item">
                    <button id="new-button" onClick={appendNew}>button</button>
                    <button id="new-lace" onClick={appendNew}>lace</button>
                </div>}


            {control.selected === "pocket" &&
                <div className="append-item">
                    <button id="new-button" onClick={appendNew}>button</button>
                </div>}


        </div>
    )
}


export default Append