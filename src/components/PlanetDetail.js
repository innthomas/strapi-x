import React from 'react';
import { useGlobalContext } from '../contexts/context';
import { BsPlusLg, BsXLg } from 'react-icons/bs';
import characterData from '../imageData/charactersData'
import Friends from './FriendsList';

const PlanetDetail = () => {
    const { isPlanetOpen, closePlanet } = useGlobalContext();

    

    return (
        <div>
            <div className={`${isPlanetOpen? "preview scrollBar show-preview px-4 pb-5" : "preview px-4"}`}>
                <div className="text-end pt-4">
                    <span className="closeBar fs-4 cursor border-0 text-dark" onClick={closePlanet}>
                        <BsXLg/>
                    </span>
                </div>
                <h3 className="fw-800 fs-2">Planet Alpha</h3>
                <p className="text-secondary pt-1">Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</p>
                <div>
                    <p className="mb-1">Population</p>
                    <p className="fw-600">234</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-600 text-secondary">CHARACTERS</p>
                    <div className=" fs-4 closeBar cursor text-dark">
                        <BsPlusLg/>
                    </div>
                </div>
                <Friends prop={characterData}/>
            </div>
        </div>
    )
}

export default PlanetDetail
