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
      <div className="vh-100 h-100 fs-3 container-fluid p-3 text-center text-warning bg-dark justify-content-center align-items-center">
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
            <h1
              onClick={() => {
                setShowNav(true);
              }}
            >
              Explore the StarWars universe
            </h1>
          ))}
        {page === "planets" && <Planets changepage={changePage} />}
      </div>
    </>
  );
}

export default App;