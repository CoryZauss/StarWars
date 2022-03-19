import React from "react";

const PlanetsList = ({planetslist}) => {
  return (
    <>
      {planetslist.map((planet) => {
          return <div key={planet.name}>{planet.name}</div>;
      })}
    </>
  );
};

export default PlanetsList;
