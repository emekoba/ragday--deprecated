import React, { useContext, useEffect } from 'react'
import { Brim } from '../../State/Control'

function Text() {

    const [control, setcontrol] = useContext(Brim)


    const updateText=e=>{

        setcontrol({...control, text: e.target.value})
    }















    return (
        <div className="text">
            <div>edits</div>
            <input onChange={updateText} placeholder="text..."/>
        </div>
    )
}

export default Text
