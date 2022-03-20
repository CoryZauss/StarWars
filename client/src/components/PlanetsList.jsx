import React, { useState, useEffect } from "react";
import PlanetView from './PlanetView.jsx';

const PlanetsList = ({ planetslist, hidebuttons }) => {
  const [showPlanet, setShowPlanet] = useState({})
  const [showList, setShowList] = useState(true)

  return (
    <>
      {showList ? planetslist.map((planet) => {
        return <div key={planet.name} onClick={() => {
          setShowPlanet(planet);
          setShowList(false);
          hidebuttons(false);
        } }>{planet.name}</div>
      })
        : (<PlanetView planet={showPlanet} goback={setShowList} showpagebuttons={hidebuttons}/>)}

    </>
  );
};

export default PlanetsList;
