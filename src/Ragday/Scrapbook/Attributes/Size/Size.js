import React, { useContext } from 'react'
import ShirtSize from './ShirtSize/ShirtSize'
import SockSize from './SockSize/SockSize'
import { Brim } from '../../State/Control'

function Size() {
const [control] = useContext(Brim)

return (
<div>

{control.article === "shirt" && <ShirtSize/>}
{control.article === "sock" && <SockSize/>}

</div>
)
}

export default Size
