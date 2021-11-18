import React from 'react';
import Planet from '../images/planet-loader.svg'

const Preloader = () => {
    return (
        <div className="text-center mt-5">
            <img className="px-3 py-5 round bg-white" src={Planet} alt="loading"/>
        </div>
    )
}

export default Preloader
