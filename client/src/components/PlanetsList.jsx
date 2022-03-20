import React, { useState, useEffect } from "react";
import PlanetView from './PlanetView.jsx';

const PlanetsList = ({ planetslist, hidebuttons }) => {
  const [showPlanet, setShowPlanet] = useState({})
  const [showList, setShowList] = useState(true)

  return (
    <>
      <div className="vw-25 p-3">
        {showList && planetslist.map((planet) => {
          return (
            <div
              className="text-center"
              key={planet.name}
              onClick={() => {
                setShowPlanet(planet);
                setShowList(false);
                hidebuttons(false);
              }}
            >
              {planet.name}
            </div>
          );
        })}
      </div>

      {!showList && <PlanetView planet={showPlanet} goback={setShowList} showpagebuttons={hidebuttons}/>}

    </>
  );
};

export default PlanetsList;
