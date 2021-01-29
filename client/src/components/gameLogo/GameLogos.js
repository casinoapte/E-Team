import React from 'react'
import './styles.css'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

// Images //

import CSGO from '../../assets/game-logos/CSGO.jpg'
import Dota from '../../assets/game-logos/Dota.jpg'
import LOL from '../../assets/game-logos/LOL.png'
import Fortnite from '../../assets/game-logos/Fortnite.jpg'
import Starcraft from '../../assets/game-logos/Starcraft.png'


export default function GameLogos() {

    const history = useHistory();


    const logoCSGO = () => {
        console.log("CSGO");
        const path = "/CSGO"
        history.push(path)
    }


    const logoLOL = () => {
        console.log("League-Of-Legends");
        const path = "/League-Of-Legends"
        history.push(path)
    }


    const logoDota = () => {
        console.log("Dota");
        const path = "/Dota"
        history.push(path)
    }


    const logoFortnite = () => {
        console.log("Fortnite");
        const path = "/Fortnite"
        history.push(path)
    }


    const logoStarcraft = () => {
        console.log("Starcraft");
        const path = "/Starcraft"
        history.push(path)
    }


    return (

        <div className="container">
            <div className="row">

                <div className="col-1">

                    
                    <img className="logo-img dota-logo" src={Dota} onClick={logoDota} />
                    <img className="logo-img csgo-logo" src={CSGO} onClick={logoCSGO} />
                    <img className="logo-img lol-logo" src={LOL} onClick={logoLOL} />
                    <img className="logo-img fortnite-logo" src={Fortnite} onClick={logoFortnite} />
                    <img className="logo-img starcraft-logo" src={Starcraft} onClick={logoStarcraft} />

                </div>

            </div>

        </div>
    )

}
