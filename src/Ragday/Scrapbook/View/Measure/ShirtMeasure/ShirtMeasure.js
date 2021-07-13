import React, { useContext } from 'react'
import { Brim } from '../../../State/Control'
import BodiceMeasure from './BodiceMeasure'
import CollarMeasure from './CollarMeasure'
import NecklineMeasure from './NecklineMeasure'
import LongsleeveMeasure from './LongsleeveMeasure'
import ShortsleeveMeasure from './ShortsleeveMeasure'
import YokeMeasure from './YokeMeasure'
import PocketMeasure from './PocketMeasure'


function ShirtMeasure({ onScreen, }) {
    const [control] = useContext(Brim)



    return (
        <div style={{ visibility: onScreen === "size" ? "visible" : "hidden" }}>

            {control.selected === "collar" && <CollarMeasure />}

            {control.selected === "neckline" && <NecklineMeasure />}

            {control.selected === "yoke" && <YokeMeasure />}

            {control.selected === "shortsleeve" && <ShortsleeveMeasure />}

            {control.selected === "longsleeve" && <LongsleeveMeasure />}

            {control.selected === "bodice" && <BodiceMeasure />}

            {control.selected === "pocket" && <PocketMeasure />}

        </div>
    )
}

export default ShirtMeasure
