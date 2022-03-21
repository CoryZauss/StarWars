import React, { useState, useEffect } from "react";
import PageDataList from "./PageDataList.jsx";
import axios from "axios";

const Page = ({changepage, page}) => {
  const [dataList, setDataList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [PreviousPageUrl, setPreviousPageUrl] = useState("");
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    let api = ''
    switch (page) {
      case 'people':
        api = "https://swapi.dev/api/people/";
        break;
      case 'planets':
        api = "https://swapi.dev/api/planets/";
        break;
      case 'films':
        api = "https://swapi.dev/api/films/";
        break;
      case 'species':
        api = "https://swapi.dev/api/species/";
        break;
      case 'starships':
        api = "https://swapi.dev/api/starships/";
        break;
      case 'vehicles':
        api = "https://swapi.dev/api/vehicles/";
        break;
    }
    getData(`api/`, api);
  }, []);

  const getData = async (url, swapi) => {
    try {
      let { data } = await axios.get(url, {
        params: swapi,
      });
      setDataList(data.results);
      setNextPageUrl(data.next);
      setPreviousPageUrl(data.previous);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>{page}</div>
      {dataList.length > 0 ? (
        <PageDataList page={page} datalist={dataList} hidebuttons={setShowButtons} />
      ) : (
        <div>Loading...</div>
      )}

      {showButtons && PreviousPageUrl !== null && dataList.length > 0 && (
        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={() => {
            getData("api/", PreviousPageUrl);
          }}
        >
          Previous
        </button>
      )}
      {showButtons && nextPageUrl !== null && dataList.length > 0 && (
        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={() => {
            getData("api/", nextPageUrl);
          }}
        >
          Next
        </button>
      )}
      <br></br>
      <button
        type="button"
        className="btn btn-warning m-2"
        onClick={() => {
          changepage("home");
        }}
      >
        Return to Nav
      </button>
    </>
  );
};

export default Page;
