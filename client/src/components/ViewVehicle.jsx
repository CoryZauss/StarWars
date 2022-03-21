import React, { useEffect, useState } from "react";

const ViewVehicle = ({ vehicle, goback, showpagebuttons, getallitems }) => {
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [pilots, setPilots] = useState([]);

  useEffect(async () => {
    await getallitems(vehicle.films).then((list) => {
      setFeaturedFilms(list);
    });
  }, []);

  useEffect(async () => {
    await getallitems(vehicle.pilots).then((list) => {
      setPilots(list);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div>{vehicle.name}</div>
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
            <div>{"Class: " + vehicle.vehicle_class}</div>
            <div>{"Cargo Capacity: " + vehicle.cargo_capacity}</div>
            <div>{"Consumables: " + vehicle.consumables}</div>
            <div>{"Cost:" + vehicle.cost_in_credits + "credits"}</div>
            <div>{"Crew Size Needed: " + vehicle.crew}</div>
            <div>{"Length: " + vehicle["length"]}</div>
            <div>{"Manufacturer: " + vehicle.manufacturer}</div>
            <div>
              {"Max Atmosphering Speed: " + vehicle.max_atmosphering_speed}
            </div>
            <div>{"Model: " + vehicle.model}</div>
            <div>{"Non Essential Passenger Capacity: " + vehicle.passengers}</div>
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
export default ViewVehicle;
