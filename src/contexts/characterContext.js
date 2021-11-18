import { createContext, useState } from 'react';
import React from 'react';
import characterData from '../imageData/charactersData';

export const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {

    const[charList, setCharList] = useState(characterData);

    return (
        <CharacterContext.Provider value={{charList, setCharList}}>
            { children }
        </CharacterContext.Provider>
    )
}

export { CharacterProvider };