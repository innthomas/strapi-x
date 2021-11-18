import React, { createContext, useState, useContext } from 'react';
import planetData from '../imageData/planetsData'

const PlanetContext = createContext();

const PlanetProvider = ({ children }) => {

    const[planetList, setPlanetList] = useState(planetData)
    return (
        <PlanetContext.Provider value={{ planetList, setPlanetList }}>
            {children}
        </PlanetContext.Provider>
    )
}

export const usePlanetContext = () => {
    return useContext(PlanetContext);
  };
  

export { PlanetContext, PlanetProvider}