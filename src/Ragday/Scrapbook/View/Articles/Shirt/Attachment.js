import React, { useContext, useState, useEffect } from 'react'
import Material from '../Material'
import { Brim } from '../../../State/Control'
import Button from './Button'
import Pocket from './Pocket'


function Attachment({form}) {
const [control] = useContext(Brim)

const [material, setmaterial] = useState([])
const [button, setbutton] = useState([])
const [pocket, setpocket] = useState([])

const getrand=()=>{ return Math.floor( Math.random() * 200 ) + 50 }

// const create=()=>{
// setcontrol(p=>({...control, appendTo: p.selected}))


useEffect(()=>{

    control.createNew.map((each)=>{

switch(each)
{
case "material" :
setmaterial([...material, <Material
                        id={getrand()} 
                        size={35} 
                        top={getrand()} 
                        axis={getrand()} 
                        onScreen={true} 
                        form="circle" 
                        color="brown" 
                        design={control.materialDesign}/>]); break;

case "button" : 
setbutton([...button, <Button
                        id={getrand()} 
                        size={10} 
                        top={getrand()} 
                        axis={getrand()} 
                        onScreen={true} 
                        form="circle" 
                        color="blue" />]); break;


case "pocket" : 
setpocket([...pocket, <Pocket
                        id={getrand()} 
                        size={25} 
                        top={getrand()} 
                        axis={getrand()} 
                        onScreen={true} 
                        form="plain" 
                        color="yellow" />]); break;


default: break;                        
}})

},[])



return (

// control.appendMaterial === true &&

//     <Material id={1} size={35} top={90} axis={136} onScreen={true} form="circle" color="" design={control.materialDesign}/>

//     <Material id={2} size={20} top={230} axis={100} onScreen={true} form="circle" color="red" design={control.materialDesign}/> 


<div>
{material}

</div>

)
}

export default Attachment
