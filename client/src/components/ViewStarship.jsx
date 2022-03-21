import React, { useEffect, useState } from "react";

const ViewStarship = ({ starship, goback, showpagebuttons, getallitems }) => {
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [pilots, setPilots] = useState([]);

  useEffect(async () => {
    await getallitems(starship.films).then((list) => {
      setFeaturedFilms(list);
    });
  }, []);



  useEffect(async () => {
    await getallitems(starship.pilots).then((list) => {
      setPilots(list);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div>{starship.name}</div>
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
            <div>{"Max Megalights: " + starship["MGLT"]}</div>
            <div>{"Cargo Capacity: " + starship.cargo_capacity}</div>
            <div>{"Consumables: " + starship.consumables}</div>
            <div>{"Cost:" + starship.cost_in_credits + "credits"}</div>
            <div>{"Crew Size Needed: " + starship.crew}</div>
            <div>{"Hyperdrive Rating: " + starship.hyperdrive_rating}</div>
            <div>{"Length: " + starship["length"]}</div>
            <div>{"Manufacturer: " + starship.manufacturer}</div>
            <div>
              {"Max Atmosphering Speed: " + starship.max_atmosphering_speed}
            </div>
            <div>{"Model: " + starship.model}</div>
            <div>{"Non Essential Passenger Capacity: " + starship.passengers}</div>
          </div>
          <div className="col border border-warning p-1 m-2">
            <div className="text-decoration-underline">PILOTS</div>
            {pilots.length > 0 &&
              pilots.map((person) => {
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

export default ViewStarship;
