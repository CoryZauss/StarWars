import React from "react";

const PlanetView = ({ planet }) => {

  return (
    <>
      <div className="container">
        {planet.name}
        <div className="featured-in"></div>
      <div className="features"></div>
      <div className="residents"></div>
      </div>
    </>
  );
};

export default PlanetView;
