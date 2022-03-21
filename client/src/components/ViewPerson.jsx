import React, { useEffect, useState } from "react";

const ViewPerson = ({
  person,
  goback,
  showpagebuttons,
  getallitems,
  getsingleitem,
}) => {
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [homeworld, setHomeworld] = useState("");
  const [species, setSpecies] = useState("");
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(async () => {
    await getallitems(person.films).then((list) => {
      setFeaturedFilms(list);
    });
  }, []);

  useEffect(async () => {
    await getsingleitem(person.homeworld).then((planet) => {
      setHomeworld(planet.name);
    });
  }, []);

  useEffect(async () => {
    await getallitems(person.species).then((list) => {
      setSpecies(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(person.starships).then((list) => {
      setStarships(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(person.vehicles).then((list) => {
      setVehicles(list);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div>{person.name}</div>
        <div className="row">
          <div className="col border border-warning p-1 m-2">
            <div className="text-decoration-underline">
              {" "}
              FEATURED IN FILMS..
            </div>
            {featuredFilms.length > 0 &&
              featuredFilms.map((film) => {
                return <div key={film.title}>{film.title}</div>;
              })}
          </div>
          <div className="col border border-warning p-2 m-2">
            <div className="text-decoration-underline">FEATURES</div>
            <div>{"Birth Year: " + person.birth_year}</div>
            <div>{"Eye Color: " + person.eye_color}</div>
            <div>{"Gender: " + person.gender}</div>
            <div>{"Hair Color:" + person.hair_color}</div>
            <div>{"Height: " + person.height + "cm"}</div>
            <div>{"Weight: " + person.mass + "kg"}</div>
            <div>{"Skin: " + person.skin_color}</div>
            {homeworld.length > 0 && <div>{ "Homeworld: " + homeworld}</div>}
            {species.length > 0 && <div>{"Species: " + species[0].name}</div>}
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

export default ViewPerson;
