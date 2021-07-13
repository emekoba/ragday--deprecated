import React, { useContext } from 'react'
import { Brim } from '../../../../../../State/Control'

function Zipper() {
const [control,setcontrol] = useContext(Brim)


const select = ()=>{setcontrol({...control, selected : "zipper"})}


return (<div className="zipper" onClick={select}>{ control.zipperForm }</div> )

}
export default Zipper