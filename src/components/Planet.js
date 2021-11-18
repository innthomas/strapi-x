import React,  { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useGlobalContext } from '../contexts/context';
import AddPlanet from './AddPlanet';
import { usePlanetContext } from '../contexts/planetContext';


const Planet = () => {

    
    const { planetList } = usePlanetContext()
    const [modalShow, setModalShow] = useState(false);
    const { openPlanet, isPlanetOpen, active } = useGlobalContext();

    return (
        <div className={`${isPlanetOpen ? "cwidth" : "show-cwidht cwidth"}`}>
            <div className={`${isPlanetOpen? "d-flex justify-content-start flex-wrap  gap-3 pt-1 pb-5": "d-flex justify-content-center flex-wrap  gap-3 pt-1 pb-5"}`}>
                {planetList.map(item => {
                    return(
                        <div className="relative" key={item.id} >
                            <div onClick={() => openPlanet(item.id)} className={`${active === item.id? "carde-active cursor carde pHeight position px-3": "cursor position carde pHeight px-3 "}`}>
                                <div className="text-center"><img className="rounded-circle py-1" src={item.src} alt={item.alt} width="176px" height="176px"/></div>
                                <p className="pcolor mb-0 fw-600">{item.name}</p>
                                <p className="text-secondary fs-12 pb-3">Pop: 235</p>
                            </div>  
                            <div onClick={() => setModalShow(true)} className={`${planetList[planetList.length-1].id === item.id? "text-white rounded-circle add cursor": "d-none"}`}>
                                <BsPlusLg/>
                            </div> 
                        </div>    
                    )
                })}       
                
            </div>
            <AddPlanet show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}

export default Planet;
