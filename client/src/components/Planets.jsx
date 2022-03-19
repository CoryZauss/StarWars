import React, { useState, useEffect } from "react";
import PlanetsList from './PlanetsList.jsx'

const Planets = () => {
  const [planetsList, setPlanetsList] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [PreviousPageUrl, setPreviousPageUrl] = useState('')

  useEffect(() => {
    getPlanets(`api/planets/`)
  }, [])

  const getPlanets = async (url) => {
    let response = await fetch(url);
    let planets = await response.json();
    setPlanetsList(planets.results);
    setNextPageUrl(planets.next);
    setPreviousPageUrl(planets.previous)
  }

  return (
    <>
      <div>PLANETS</div>
      {planetsList.length > 0 ? <PlanetsList planetslist={planetsList}/> : <div>Loading...</div>}

      {PreviousPageUrl !== null && (
        <button onClick={() => {
          getPlanets(PreviousPageUrl)
        }
      }>Previous</button>
      )}
      {nextPageUrl !== null && (
        <button onClick={() => {
          getPlanets(nextPageUrl)
        }}>Next</button>
      )}
    </>
  )
};

export default Planets;
