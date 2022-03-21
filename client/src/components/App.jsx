import React, { useState } from 'react';
import Nav from './Nav.jsx'
import Page from './Page.jsx'

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [page, setPage] = useState('home');
  const changePage = (string) => {
    setPage(string)
  }

  return (
    <>
      <div className="vh-100 fs-4 container-fluid p-3 text-center text-warning bg-dark">
        {page === "home" &&
          (showNav ? (
            <div>
              <Nav changepage={changePage} />
            </div>
          ) : (
            <div className="vh-100 row fs-1 align-items-center">
              <h1 className="display-1">Explore the StarWars Universe</h1>
              <button
                type="button"
                className="col-2 btn btn-warning m-auto"
                onClick={() => {
                  setShowNav(true);
                }}
              >
                {" "}
                Enter
              </button>
            </div>
          ))}
        {page !== "home" && <Page changepage={changePage} page={page} />}
      </div>
    </>
  );
}

export default App;