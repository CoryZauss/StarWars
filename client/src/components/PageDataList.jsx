import React, { useState, useEffect } from "react";

const PageDataList = ({ datalist, hidebuttons }) => {
  const [showInfo, setShowInfo] = useState({});
  const [showList, setShowList] = useState(true);

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
                  setShowInfo(data);
                  setShowList(false);
                  hidebuttons(false);
                }}
              >
                {data.name ? data.name : data.title}
              </div>
            );
          })}
      </div>


    </>
  );
};

export default PageDataList;
