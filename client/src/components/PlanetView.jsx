import React, { useEffect, useState } from "react";
import axios from "axios";

const PlanetView = ({ planet, goback, showpagebuttons }) => {
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    getFilmsOrPeople(planet.films, "films");
  }, []);

  useEffect(() => {
    getFilmsOrPeople(planet.residents, "people");
  }, []);

  const getSingleItem = async (url, swapi) => {
    try {
      let { data } = await axios.get(url, {
        params: swapi,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getFilmsOrPeople = async (swapiArray, string) => {
    try {
      let items = [];
      swapiArray.map((swapi) => {
        items.push(getSingleItem("api/", swapi));
      });
      let results = await Promise.all(items);
      if (string === "films") {
        setFeaturedFilms(results);
      } else {
        setResidents(results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">{planet.name}</div>
        <div className="row">
          <div className="col">
            FEATURED IN FILMS..
            {featuredFilms.length > 0 &&
              featuredFilms.map((film) => {
                return <div>{film.title}</div>;
              })}
          </div>
          <div className="col">
            PLANET INFORMATION
            <span className="row">Population: {planet.population}</span>
            <span className="row">Climate: {planet.climate}</span>
            <span className="row">Gravity: {planet.gravity}</span>
            <span className="row"> Diameter: {planet.diameter}</span>
            <span className="row">
              {" "}
              Orbital Period: {planet.orbital_period}
            </span>
            <span className="row">
              Rotation Period: {planet.rotation_period}
            </span>
            <span className="row">
              Surface Water: {planet.surface_water}% Terrain: {planet.terrain}
            </span>
          </div>
          <div className="col">
            RESIDENTS OF PLANET
            {residents.length > 0 &&
              residents.map((resident) => {
                return <div key={resident.name}>{resident.name}</div>;
              })}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-warning"
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

export default PlanetView;
