import React, { useContext } from 'react';
import { Brim } from '../State/Control';

import {
        CollarButtons,
        NecklineButtons,
        ShortSleeveButtons,
        PlacketButtons,
        PocketButtons,
        CuffButtons,
        PouchButtons,
        HemButtons,

} from '../../Library/Library'


const Form = () => {

        const [control, setcontrol] = useContext(Brim)



        const handleClick = e => {

                setcontrol({ ...control, [`${control.selected}Form`]: e.target.id })

        }


        const loadButtons = () => {

                let buttonArray;

                switch (control.selected) {

                        case "collar": buttonArray = CollarButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} />{each.name}</div>); break;

                        case "neckline": buttonArray = NecklineButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} style={{ backgroundImage: `url(${each.icon})`, backgroundSize: 110, backgroundPositionX: -20, backgroundPositionY: 20, backgroundRepeat: "no-repeat" }} />{each.name}</div>); break;

                        case "shortsleeve": buttonArray = ShortSleeveButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} />{each.name}</div>); break;

                        case "placket": buttonArray = PlacketButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} />{each.name}</div>); break;

                        case "pocket": buttonArray = PocketButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} />{each.name}</div>); break;

                        case "cuff": buttonArray = CuffButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} style={{ backgroundImage: `url(${each.icon})`, backgroundSize: 95, backgroundPositionX: -20, backgroundPositionY: 2, backgroundRepeat: "no-repeat" }} />{each.name}</div>); break;

                        case "pouch": buttonArray = PouchButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} style={{ backgroundImage: `url(${each.icon})`, backgroundSize: 95, backgroundPositionX: -20, backgroundPositionY: 2, backgroundRepeat: "no-repeat" }} />{each.name}</div>); break;

                        case "hem": buttonArray = HemButtons.map(each => <div className="form-item"><button id={each.name} onClick={handleClick} style={{ backgroundImage: `url(${each.icon})`, backgroundSize: 95, backgroundPositionX: -20, backgroundPositionY: 2, backgroundRepeat: "no-repeat" }} />{each.name}</div>); break;



                        default: buttonArray = control.selected + "  Buttons"; break;
                }

                return buttonArray
        }




        return (<div className="form">{loadButtons()}</div>)
}

export default Form