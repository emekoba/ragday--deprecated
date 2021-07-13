import React, { useState, useEffect } from 'react'


function BodiceSize() {


    const setCodeValue = e => {

    }


    const setUkValue = e => {

    }

    const setUsCanadaValue = e => {

    }

    const setEuropeValue = e => {

    }

    const [measure, setmeasure] = useState({

        size: [

            {
                type: "shirt-width",
                code: "",
                uk: "",
                uscanada: "",
                europe: "",
            },
            {
                type: "body-length",
                code: "",
                uk: "",
                uscanada: "",
                europe: "",
            },
            {
                type: "chest-width",
                code: "",
                uk: "",
                uscanada: "",
                europe: "",
            },
            {
                type: "shoulder",
                code: "",
                uk: "",
                uscanada: "",
                europe: "",
            },
            {
                type: "armhole",
                code: "",
                uk: "",
                uscanada: "",
                europe: "",
            },
            {
                type: "neck-opening",
                code: "",
                uk: "",
                uscanada: "",
                europe: "",
            },

        ]
    })


    let shirtwidth;
    let bodyLength;
    let chestWidth;
    let shoulder;
    let armHole;
    let neckOpening;


    const evaluate = e => {

        let v = e.target.value;

        let par = document.getElementById(e.target.id).parentElement.className
        
        console.log(par)

        if (par === "shirt-width") {

            switch (e.target.id) {

                case "uk":
                    setmeasure({ size: [...measure.size, { type: "shirt-width", code: v + 1, uk: v, uscanada: v + 2, europe: v + 3, }] }); break;
                case "uscanada":
                    setmeasure({ size: [...measure.size, { type: "shirt-width", code: v + 1, uk: v + 1, uscanada: v, europe: v + 3, }] }); break;
                case "europe":
                    setmeasure({ size: [...measure.size, { type: "shirt-width", code: v + 1, uk: v + 1, uscanada: v + 2, europe: v, }] }); break;
                case "code":
                    setmeasure({ size: [...measure.size, { type: "shirt-width", code: v, uk: v + 1, uscanada: v + 2, europe: v + 3, }] }); break;

            }

        }

        if (par === "body-length") {


        }
    }



    measure.size.map(each => {

        if (each.type === "shirt-width") {

            shirtwidth =
                Object.entries(each).map(([key, value]) => {
                    return (
                        (key === "type") ?
                            <div className={each.type}>
                                <div>{each.type} : </div>
                            </div>
                            :
                            <div className={each.type}>
                                <input id={key} value={value} placeholder="..." onChange={evaluate} /> <br /> <br />
                            </div>
                    )
                })
        }

        if (each.type === "body-length") {

            bodyLength =
                Object.entries(each).map(([key, value]) => {
                    return (
                        (key === "type") ?
                            <div className={each.type}>
                                <div>{each.type} :</div>
                            </div>
                            :
                            <div className={each.type}>
                                <input id={key} value={value} placeholder="..." onChange={evaluate} /> <br /> <br />
                            </div>
                    )
                })
        }

        if (each.type === "chest-width") {

            chestWidth =
                Object.entries(each).map(([key, value]) => {
                    return (
                        (key === "type") ?
                            <div className={each.type}>
                                <div>{each.type} :</div>
                            </div>
                            :
                            <div className={each.type}>
                                <input id={key} value={value} placeholder="..." onChange={evaluate} /> <br /> <br />
                            </div>
                    )
                })
        }

        if (each.type === "shoulder") {

            shoulder =
                Object.entries(each).map(([key, value]) => {
                    return (
                        (key === "type") ?
                            <div className={each.type}>
                                <div>{each.type} :</div>
                            </div>
                            :
                            <div className={each.type}>
                                <input id={key} value={value} placeholder="..." onChange={evaluate} /> <br /> <br />
                            </div>
                    )
                })
        }

        if (each.type === "armhole") {

            armHole =
                Object.entries(each).map(([key, value]) => {
                    return (
                        (key === "type") ?
                            <div className={each.type}>
                                <div>{each.type} :</div>
                            </div>
                            :
                            <div className={each.type}>
                                <input id={key} value={value} placeholder="..." onChange={evaluate} /> <br /> <br />
                            </div>
                    )
                })
        }

        if (each.type === "neck-opening") {

            neckOpening =
                Object.entries(each).map(([key, value]) => {
                    return (
                        (key === "type") ?
                            <div className={each.type}>
                                <div>{each.type} :</div>
                            </div>
                            :
                            <div className={each.type}>
                                <input id={key} value={value} placeholder="..." onChange={evaluate} /> <br /> <br />
                            </div>
                    )
                })
        }
    })




    return (

        <div className="size-values">

            {shirtwidth}

            {bodyLength}

            {chestWidth}

            {shoulder}

            {armHole}

            {neckOpening}

        </div>
    )



}
export default BodiceSize
