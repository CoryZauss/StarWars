import React, { useEffect, useState } from "react";

const ViewFilm = ({ film, goback, showpagebuttons, getallitems }) => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(async () => {
    await getallitems(film.characters).then((list) => {
      setCharacters(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(film.planets).then((list) => {
      setPlanets(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(film.species).then((list) => {
      setSpecies(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(film.starships).then((list) => {
      setStarships(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(film.vehicles).then((list) => {
      setVehicles(list);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-decoration-underline">{film.title}</div>
        <div className="row border border-warning p-2 m-2">
          {film.opening_crawl}
        </div>
        <div className="row">
          <div className="col border border-warning p-1 m-2">
            <div className="text-decoration-underline">
              {" "}
              FEATURED CHARACTERS
            </div>
            {characters.length > 0 &&
              characters.map((person) => {
                return <div key={person.title}>{person.name}</div>;
              })}
          </div>
          <div className="col border border-warning p-2 m-2">
            <div className="text-decoration-underline">DETAILS</div>
            <div>{"Director: " + film.director}</div>
            <div>{"Producer: " + film.producer}</div>
            <div>{"Release Date: " + film.release_date}</div>
            <div>{"Episode:" + film.episode_id}</div>
            {species.length > 0 &&
              species.map((species) => {
                return <div key={species.name}>{species.name}</div>;
              })}
          </div>
          <div className="col border border-warning p-1 m-2">
            <div>
              <div className="text-decoration-underline">VEHICLES</div>
              {vehicles.length > 0 &&
                vehicles.map((vehicle) => {
                  return <div key={vehicle.name}>{vehicle.name}</div>;
                })}
            </div>
            <div className="row">
              <div className="text-decoration-underline">STARSHIPS</div>
              {starships.length > 0 &&
                starships.map((ship) => {
                  return <div key={ship.name}>{ship.name}</div>;
                })}
            </div>
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

export default ViewFilm;
