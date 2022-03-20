import React, { useState, useEffect } from "react";
import PlanetView from './PlanetView.jsx';

const PlanetsList = ({ planetslist }) => {
  const [showPlanet, setShowPlanet] = useState({})
  const [showList, setShowList] = useState(true)

  return (
    <>
      {showList ? planetslist.map((planet) => {
        return <div key={planet.name} onClick={() => {
          setShowPlanet(planet);
          setShowList(false);
        } }>{planet.name}</div>
      })
        : (<PlanetView planet={showPlanet}/>)}

    </>
  );
};

export default PlanetsList;
