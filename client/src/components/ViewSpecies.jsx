import React, { useEffect, useState } from "react";

const ViewSpecies = ({
  species,
  goback,
  showpagebuttons,
  getallitems,
  getsingleitem,
}) => {
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [homeworld, setHomeworld] = useState("");
  const [residents, setResidents] = useState([]);

  useEffect(async () => {
    await getallitems(species.films).then((list) => {
      setFeaturedFilms(list);
    });
  }, []);

  useEffect(async () => {
    await getsingleitem(species.homeworld).then((planet) => {
      setHomeworld(planet.name);
    });
  }, []);

  useEffect(async () => {
    await getallitems(species.people).then((list) => {
      setResidents(list);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div>{species.name}</div>
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
            <div>{"Average Height: " + species.average_height}</div>
            <div>{"Average Lifespan: " + species.average_lifespan}</div>
            <div>{"Classification: " + species.classification}</div>
            <div>{"Designation:" + species.designation}</div>
            <div>{"Eye Colors: " + species.eye_colors}</div>
            <div>{"Hair Colors: " + species.hair_colors}</div>
            <div>{"Language: " + species.language}</div>
            <div>{"Skin: " + species.skin_colors}</div>
            {homeworld.length > 0 && <div>{"Homeworld: " + homeworld}</div>}
            {species.length > 0 && <div>{"Species: " + species[0].name}</div>}
          </div>
          <div className="col border border-warning p-1 m-2">
            <div className="text-decoration-underline">RESIDENTS</div>
            {residents.length > 0 &&
              residents.map((person) => {
                return <div key={person.name}>{person.name}</div>;
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
export default ViewSpecies;
