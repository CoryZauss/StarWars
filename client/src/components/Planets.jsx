import React, { useState, useEffect } from "react";
import PlanetsList from "./PlanetsList.jsx";
import axios from "axios";

const Planets = () => {
  const [planetsList, setPlanetsList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [PreviousPageUrl, setPreviousPageUrl] = useState("");
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    getPlanets(`api/`, "https://swapi.dev/api/planets/");
  }, []);

  const getPlanets = async (url, swapi) => {
    try {
      let { data } = await axios.get(url, {
        params: swapi,
      });
      setPlanetsList(data.results);
      setNextPageUrl(data.next);
      setPreviousPageUrl(data.previous);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>PLANETS</div>
      {planetsList.length > 0 ? (
        <PlanetsList planetslist={planetsList} hidebuttons={setShowButtons}/>
      ) : (
        <div>Loading...</div>
      )}

      {showButtons && PreviousPageUrl !== null && planetsList.length > 0 && (
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            getPlanets("api/", PreviousPageUrl);
          }}
        >
          Previous
        </button>
      )}
      {showButtons && nextPageUrl !== null && planetsList.length > 0 && (
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            getPlanets("api/", nextPageUrl);
          }}
        >
          Next
        </button>
      )}
    </>
  );
};

export default Planets;
