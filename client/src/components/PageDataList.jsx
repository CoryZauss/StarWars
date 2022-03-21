import React, { useState, useEffect } from "react";
import ViewFilm from './ViewFilm.jsx'
import ViewPerson from './ViewPerson.jsx'
import ViewPlanet from './ViewPlanet.jsx'
import ViewSpecies from './ViewSpecies.jsx'
import ViewStarship from './ViewStarship.jsx'
import ViewVehicle from './ViewVehicle.jsx'
import axios from 'axios'

const PageDataList = ({ datalist, hidebuttons, page }) => {
  const [details, setDetails] = useState({});
  const [showList, setShowList] = useState(true);

  const getSingleItem = async (url, swapi) => {
    try {
      let { data } = await axios.get(url, {
        params: swapi,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getAllItems = async (swapiArray) => {
    try {
      let items = [];
      swapiArray.map((swapi) => {
        items.push(getSingleItem("api/", swapi));
      });
      let results = await Promise.all(items);
      return results
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="vw-25 p-3">
        {showList &&
          datalist.map((data) => {
            return (
              <div
                className="text-center"
                key={data.name ? data.name : data.title}
                onClick={() => {
                  setDetails(data);
                  setShowList(false);
                  hidebuttons(false);
                }}
              >
                {data.name ? data.name : data.title}
              </div>
            );
          })}
      </div>

      {!showList && page === "people" && (
        <ViewPerson
          person={details}
          goback={setShowList}
          showpagebuttons={hidebuttons}
          getallitems={getAllItems}
          getsingleitem={getSingleItem}
        />
      )}

      {!showList && page === "planets" && (
        <ViewPlanet
          planet={details}
          goback={setShowList}
          showpagebuttons={hidebuttons}
          getallitems={getAllItems}
        />
      )}

      {!showList && page === "films" && (
        <ViewFilm
          film={details}
          goback={setShowList}
          showpagebuttons={hidebuttons}
          getallitems={getAllItems}
        />
      )}

      {!showList && page === "species" && (
        <ViewSpecies
          species={details}
          goback={setShowList}
          showpagebuttons={hidebuttons}
          getallitems={getAllItems}
          getsingleitem={getSingleItem}
        />
      )}

      {!showList && page === "starships" && (
        <ViewStarship
          starship={details}
          goback={setShowList}
          showpagebuttons={hidebuttons}
          getallitems={getAllItems}
        />
      )}

      {!showList && page === "vehicles" && (
        <ViewVehicle
          vehicle={details}
          goback={setShowList}
          showpagebuttons={hidebuttons}
          getallitems={getAllItems}
        />
      )}

    </>
  );
};

export default PageDataList;
