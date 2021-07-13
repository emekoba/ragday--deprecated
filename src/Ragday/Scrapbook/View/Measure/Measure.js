import React, { useContext } from 'react'
import { Brim } from '../../State/Control'
import ShirtMeasure from './ShirtMeasure/ShirtMeasure'


function Measure({ id, onScreen }) {
    const [control] = useContext(Brim)



    return (
        <div>

            <ShirtMeasure id={"shirt " + id + " shirtsize"} onScreen={control.attributeOnScreen} />

        </div>
    )
}

export default Measure
