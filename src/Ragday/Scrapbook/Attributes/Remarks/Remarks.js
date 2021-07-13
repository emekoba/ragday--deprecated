import React, { useState, useContext } from 'react'
import { Brim } from '../../State/Control'
import BodiceRemarks from './ShirtRemarks/BodiceRemarks'
import LongsleeveRemarks from './ShirtRemarks/longsleeveRemarks'
import CollarRemarks from './ShirtRemarks/CollarRemarks'
import NecklineRemarks from './ShirtRemarks/NecklineRemarks'
import CuffRemarks from './ShirtRemarks/CuffRemarks'
import ShortsleeveRemarks from './ShirtRemarks/ShortsleeveRemarks'

export default function Remarks() {
const [control] = useContext(Brim)

const [tab, settab] = useState('form')

const changeTab=e=>{

var children = document.getElementById(e.target.id).parentElement.childNodes
Array.from(children).forEach(btn=>{ btn.style.border = "none";});
document.getElementById(e.target.id).style.borderBottom = "3px solid var(--theme)"  
 
settab(e.target.id)
}

return (
<div className="remarks">
    
    {control.selected} remarks...

    <div className="tabs">
        <button id="form" onClick={changeTab}>form</button>
        <button id="fabric" onClick={changeTab}>fabric</button>
        <button id="color" onClick={changeTab}>color</button>
        <button id="design" onClick={changeTab}>design</button>
        <button id="append" onClick={changeTab}>append</button>
    </div>

{ control.selected === 'collar' && <CollarRemarks tab={tab}/>}
{ control.selected === 'neckline' && <NecklineRemarks tab={tab}/>}
{ control.selected === 'bodice' && <BodiceRemarks tab={tab}/>}
{ control.selected === 'long-sleeve' && <LongsleeveRemarks tab={tab}/>}
{ control.selected === 'short-sleeve' && <ShortsleeveRemarks tab={tab}/>}
{ control.selected === 'cuff' && <CuffRemarks tab={tab}/>}

</div>
)
}
