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
        <div >{planet.name}</div>
        <div className="row">
          <div className="col border border-warning p-1 m-2">
            FEATURED IN FILMS..
            {featuredFilms.length > 0 &&
              featuredFilms.map((film) => {
                return <div>{film.title}</div>;
              })}
          </div>
          <div className="col border border-warning p-2 m-2">
            <div>PLANET INFORMATION</div>
            <div>Population: {planet.population}</div>
            <div>Climate: {planet.climate}</div>
            <div>Gravity: {planet.gravity}</div>
            <div>Diameter: {planet.diameter}</div>
            <div>Orbital Period: {planet.orbital_period}</div>
            <div>Rotation Period: {planet.rotation_period}</div>
            <div>Surface Water: {planet.surface_water}%</div>
            <div>Terrain:{planet.terrain}</div>
            </div>
            <div className="col border border-warning p-1 m-2">
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

export default PlanetView;
