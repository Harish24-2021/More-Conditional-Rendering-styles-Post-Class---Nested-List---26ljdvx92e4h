import React, { useState } from "react";
import City from "./City";
function States({ states }) {
  const [cityIndex, setCityIndex] = useState(-1);
  const [townIndex, setTownIndex] = React.useState(-1);

  const handleCity = (index) => {
    if (cityIndex === index) {
      setCityIndex(-1);
      return;
    }
    setCityIndex(index);
    setTownIndex(-1);
  };

  return (
    <>
      {states.map((ele, index) => {
        return (
          <>
            <h2 id={`state${index + 1}`} onClick={() => handleCity(index)}>
              {ele.name}
            </h2>
          </>
        );
      })}
      {cityIndex !== -1 && (
        <City index={townIndex} cities={states[cityIndex].cities}></City>
      )}
    </>
  );
}

export default States;