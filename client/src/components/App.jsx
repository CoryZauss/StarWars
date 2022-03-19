import React, { useState } from 'react';
import Planets from './Planets.jsx'
import Nav from './Nav.jsx'

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [page, setPage] = useState('home');
  const changePage = (string) => {
    setPage(string)
  }

  return (
    <>
      {page === "home" &&
        (showNav ? (
          <div>
            <span
              onClick={() => {
                setShowNav(false);
              }}
          >
            nav
            </span>
            <Nav changepage={changePage} />
          </div>
        ) : (
          <div
            onClick={() => {
              setShowNav(true);
            }}
          >
            Explore the StarWars universe
          </div>
        ))}
      {page === "planets" && <Planets />}
    </>
  );
}

export default App;