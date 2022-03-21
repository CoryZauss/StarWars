import React, { useEffect, useState } from "react";

const ViewPlanet = ({ planet, goback, showpagebuttons, getallitems }) => {
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [residents, setResidents] = useState([]);

  useEffect(async () => {
    await getallitems(planet.films).then((list) => {
      setFeaturedFilms(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(planet.residents).then((list) => {
      setResidents(list);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div>{planet.name}</div>
        <div className="row">
          <div className="col border border-warning p-1 m-2">
            <div className="text-decoration-underline">FEATURED IN FILMS..</div>
            {featuredFilms.length > 0 &&
              featuredFilms.map((film) => {
                return <div key={film.title}>{film.title}</div>;
              })}
          </div>
          <div className="col border border-warning p-2 m-2">
            <div className="text-decoration-underline">PLANET INFORMATION</div>
            <div>{"Population:  " + planet.population}</div>
            <div>{"Climate: " + planet.climate}</div>
            <div>{"Gravity: " + planet.gravity}</div>
            <div>{"Diameter: " + planet.diameter + "km"}</div>
            <div>{"Orbital Period:  " + planet.orbital_period + "days"}</div>
            <div>{"Rotation Period: " + planet.rotation_period + "hours"}</div>
            <div>{"Surface Water: " + planet.surface_water + "%"}</div>
            <div>{"Terrain: " + planet.terrain}</div>
          </div>
          <div className="col border border-warning p-1 m-2">
            <div className="text-decoration-underline">RESIDENTS</div>
            {residents.length > 0 &&
              residents.map((resident) => {
                return <div key={resident.name}>{resident.name}</div>;
              })}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-warning m-2"
        onClick={() => {
          goback(true);
          showpagebuttons(true);
        }}
      >
        Return to list
      </button>
    </>
  );
};

export default ViewPlanet;
