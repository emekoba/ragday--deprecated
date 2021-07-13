import React, { useContext, useState } from 'react';
import { Library } from '../../Library/Library';
import { Brim } from '../State/Control';

const Fabric = () => {

    const [control, setcontrol] = useContext(Brim)
    const [fabrics] = useState([

        { name: "linen", image: Library.linen1, },
        { name: "cotton", image: Library.cotton1, },
        { name: "wool", image: Library.wool1, },
        { name: "suede", image: Library.suede1, },
        { name: "silk", image: Library.silk1, },
        { name: "rayon", image: Library.rayon1, },
        { name: "polyester", image: Library.polyester1, },
        { name: "tweed", image: Library.tweed1, },
        { name: "nylon", image: Library.nylon1, },
        { name: "spandex", image: Library.spandex1, },
        { name: "cashmere", image: Library.cashmere1, },
        { name: "leather", image: Library.leather1, },
        { name: "monhair", image: Library.monhair1, },
        { name: "corduroy", image: Library.corduroy1, },
        { name: "melange", image: Library.melange1, },

    ])


    const addFabric = e => {
        fabrics.map((fabric) => {
            if (fabric.name === e.target.id) {

                setcontrol({ ...control, [`${control.selected}Fabric`]: fabric.name })

            }
        })
    }



    return (
        <div className="fabric">
            {fabrics.map(fabric => {

                return (
                    <div className='fab-item'>
                        <button id={fabric.name} onClick={addFabric} style={{ backgroundSize: 80, backgroundImage: `url(${fabric.image})` }} />
                        {fabric.name}
                    </div>
                )
            })}

        </div>
    )
}


export default Fabric











