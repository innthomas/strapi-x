import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Character from './Character';
import CharDetail from './CharDetail';
import Planet from './Planet';
import PlanetDetail from './PlanetDetail';
import { CharacterProvider } from '../contexts/characterContext'
import { PlanetProvider } from '../contexts/planetContext';

const NavBar = () => {
    return (
        <div>
            <Tabs variant="pills" defaultActiveKey="planets" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="planets" tabClassName="text-secondary fw-600"  title="PLANETS">
                <PlanetProvider>
                    <Planet/>
                </PlanetProvider> 
                    <PlanetDetail/>
                </Tab>
                <Tab eventKey="character" tabClassName="text-secondary  fw-600"  title="CHARACTERS">
                    <CharacterProvider>
                        <Character/>
                        <CharDetail/>
                    </CharacterProvider>
                </Tab>
            </Tabs>
        </div>
    )
}

export default NavBar
