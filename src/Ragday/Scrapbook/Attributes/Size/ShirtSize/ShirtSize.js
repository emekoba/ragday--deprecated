import React, { useContext } from 'react';
import BodiceSize from './BodiceSize'
import LongsleeveSize from './longsleeveSize'
import { Brim } from '../../../State/Control';

const Size =()=>{
const [control] = useContext(Brim)


return(

<div className='size'>

<div className="size-headers">
    <div>MEASURE (inches)</div>
    <div>CODE</div>
    <div>UK</div>
    <div>US & CANADA</div>
    <div>EUROPE</div>
</div>

{control.selected === "bodice" && <BodiceSize/>}
{control.selected === "longsleeve" && <LongsleeveSize/>}

</div>
)
}
export default Size