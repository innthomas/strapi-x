import React from 'react';
import { useGlobalContext } from '../contexts/context';
import { BsPlusLg, BsXLg } from 'react-icons/bs';
import Image  from './Image';
import Friends from './FriendsList';

const PlanetDetail = () => {
    const { isPlanetOpen, closePlanet } = useGlobalContext();

    const charList = [
        { id: 1, img: Image.character7, friends: "23 friends", name:"Darlene Robertson"},
        { id: 2, img: Image.character1, friends: "23 friends", name:"Cameron Williamson"},
        { id: 3, img: Image.character2, friends: "23 friends", name:"Leslie Alexander"},
        { id: 4, img: Image.character8, friends: "23 friends", name:"Kristin Watson"},
        { id: 5, img: Image.character5, friends: "23 friends", name:"Jenny Wilson"},
        { id: 6, img: Image.character12, friends: "23 friends", name:"Marvin McKinney"},
        { id: 7, img: Image.character6, friends: "23 friends", name:"Jerome Bell"},
        { id: 8, img: Image.character4, friends: "23 friends", name:"Guy Hawkins"},
        { id: 9, img: Image.character10, friends: "23 friends", name:"Robert Fox"},
    ]

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
                <Friends prop={charList}/>
            </div>
        </div>
    )
}

export default PlanetDetail
