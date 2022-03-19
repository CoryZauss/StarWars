import React from "react";

const Nav = ({changepage}) => {
  return (
    <>
      <div
        onClick={() => {
          changepage("people");
        }}
      >
        People
      </div>
      <div
        onClick={() => {
          changepage("planets");
        }}
      >
        Planets
      </div>
      <div
        onClick={() => {
          changepage("species");
        }}
      >
        Species
      </div>
      <div
        onClick={() => {
          changepage("starships");
        }}
      >
        Starships
      </div>
      <div
        onClick={() => {
          changepage("vehicles");
        }}
      >
        Vehicles
      </div>
      <div
        onClick={() => {
          changepage("films");
        }}
      >
        Films
      </div>
    </>
  );
};

export default Nav;
