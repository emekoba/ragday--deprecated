import React, { useContext } from 'react'
import { Brim } from '../../../State/Control'

function PocketMeasure() {
const [control] = useContext(Brim)



const LxW ={
    zIndex: 5,
    width: 20,
    top: 144,
    left: 172,
}


return (
<div>

<svg style={LxW} viewBox="0 0 61.63 61.06"><path style={{fill: control.bodiceColor === "#1A1A1A" ? "white" : "#1A1A1A"}} d="M0,3.62V50.06c0,4.83,7.5,4.83,7.5,0V3.62C7.5-1.2,0-1.21,0,3.62Z"/></svg>

<svg style={LxW} viewBox="0 0 61.63 61.06"><path style={{fill: control.bodiceColor === "#1A1A1A" ? "white" : "#1A1A1A"}} d="M58,53.56H20c-4.83,0-4.83,7.5,0,7.5H58c4.83,0,4.83-7.5,0-7.5Z"/></svg>





</div>
)
}

export default PocketMeasure
