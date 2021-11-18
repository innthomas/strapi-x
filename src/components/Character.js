import React, { useState, useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import AddCharacter from './AddCharacter'
import { useGlobalContext } from '../contexts/context';
import { CharacterContext } from '../contexts/characterContext'

const Character = () => {
    
    const { charList } = useContext(CharacterContext)
    const [modalShow, setModalShow] = useState(false);
    const { openChararacter, isChararacterOpen, activeChar } = useGlobalContext();
    
    return (
        <div className={`${isChararacterOpen ? "cwidth" : "show-cwidht cwidth"}`}>
            <div className={`${isChararacterOpen ?"text-end d-none d-lg-block drop-width": "text-end drop-width"}`}>
                <select className=" border-0 text-center p-2  rounded cursor fw-600" style={{background: "#EAEAEB"}}>
                    <option value="all">Planets: All</option>
                </select>
            </div>
            <div className={`${isChararacterOpen? "d-flex justify-content-start flex-wrap  gap-3 pt-1 pb-5": "d-flex justify-content-lg-start justify-content-center flex-wrap  gap-3 pt-1 pb-5"}`}>
                {charList.map(item => {
                return(
                    <div key={item.id} className="relative">
                        <div onClick={() => openChararacter(item.id, item.name)} className={`${activeChar === item.id? "carde cursor carde-active cHeight": "carde cursor cHeight"}`}>
                            <div className="text-center"><img className="img-full" src={item.src} alt={item.alt}/></div>
                            <p className="pcolor mb-0 fw-600 px-3 pt-2">{item.name}</p>
                            <p className="text-secondary fs-12 pb-3 px-3">23 friends</p>
                        </div>
                        <div onClick={() => setModalShow(true)} className={`${charList[charList.length-1].id === item.id? "text-white rounded-circle add cursor": "d-none"}`}>
                            <BsPlusLg/>
                        </div>
                    </div>
                    )
                })}        
            </div>
            <AddCharacter show={modalShow} onHide={() => setModalShow(false)}/>
       </div>
    )
}

export default Character;
