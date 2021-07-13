import React, { useContext } from 'react'
import { Brim } from '../../../State/Control'
import Ankle from './Ankle'
import Toe from './Toe'
import SockCuff from './SockCuff'
import Gusset from './Gusset'
import Foot from './Foot'

function Sock({id, side}) {
    const [control, setcontrol] =useContext(Brim)
    

    return (

        <div className="sock">
            
            <Toe id={"sock" + id + "toe"} size={40} top={360} axis_L={50} axis_R={370} onScreen={control.toeOnScreen} form={control.toeForm} color={control.toeColor} side={side} />

            <Ankle id={"sock" + id + "ankle"} size={300} top={260} axis_L={50} axis_R={120} onScreen={control.ankleOnScreen} form={control.ankleForm} color={control.ankleColor} side={side} />

            <SockCuff id={"shirt " + id + " sockCuff"} contrast={false} onScreen={control.sockCuffOnScreen} form={control.sockCuffForm} color={control.sockCuffColor} />

            <Gusset id={"shirt " + id + " gusset"} size={34} top={210} axis={273} contrast={true} onScreen={control.gussetOnScreen} form={control.gussetForm} color={control.gussetColor} side={side} />

            <Foot id={"shirt " + id + " foot"} size={34} top={210} axis={273} contrast={true} onScreen={control.footOnScreen} form={control.footForm} color={control.footColor} side={side} />


        </div>
    )
}

export default Sock
