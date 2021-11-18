import React from 'react';
import { useGlobalContext } from '../contexts/context';
import { BsXLg } from 'react-icons/bs';
import Friends from './FriendsList';
import Image from './Image'

const CharDetail = () => {
    const { isChararacterOpen, closeChararacter, name } = useGlobalContext();
    const cList = [
        { id: 1, img: Image.character9, friends: "Amet minim mollit non deserunt ullamco est", name:"Eleanor Pena"},
        { id: 2, img: Image.character16, friends: "Amet minim mollit non deserunt ullamco est", name:"Brooklyn Simmons"},
        { id: 3, img: Image.character4, friends: "Amet minim mollit non deserunt ullamco est", name:"Kristin Watson"},
        { id: 4, img: Image.character3, friends: "Amet minim mollit non deserunt ullamco est", name:"Cody Fisher"},
        { id: 5, img: Image.character14, friends: "Amet minim mollit non deserunt ullamco est", name:"Courtney Henry"},
        { id: 6, img: Image.character5, friends: "Amet minim mollit non deserunt ullamco est", name:"Annette Black"},
    ]

    return (
        <div>
            <div className={`${isChararacterOpen? "preview scrollBar show-preview px-4 pb-5" : "preview px-4"}`}>
                <div className="text-end pt-4">
                    <span className="closeBar fs-4 cursor border-0 text-dark" onClick={closeChararacter}>
                        <BsXLg/>
                    </span>
                </div>
                <h3 className="fw-800 fs-2 my-3">{name}</h3>
                <p className="text-secondary pt-1">{name.match(/[^\s]+/)} is really a nice person. Has been living on planet Alpha for the last 10 years.</p>
                <div className="d-flex gap-5">
                    <div>
                        <p className="my-1">Planet</p>
                        <p className="fw-600">Alpha</p>
                    </div>
                    <div className="ms-5">
                        <p className="my-1">Friends</p>
                        <p className="fw-600">23</p>
                    </div>
                </div>
                <p className="fw-600 text-secondary">FRIENDS</p>
                <Friends prop={cList}/>
            </div>
        </div>
    )
}

export default CharDetail
