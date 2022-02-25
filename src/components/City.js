import React, { useState } from "react";
import Town from "./Town";

export default function City({ cities, index }) {
  const [townIndex, setTownIndex] = useState(index);

  const handleTown = (index) => {
    if (townIndex === index) {
      setTownIndex(-1);
      return;
    }
    setTownIndex(index);
  };

  return (
    <>
      {cities.map((ele, index) => {
        return (
          <>
            <h3 id={`city${index + 1}`} onClick={() => handleTown(index)}>
              {ele.name}
            </h3>
          </>
        );
      })}
      {townIndex !== -1 && <Town towns={cities[townIndex].towns}></Town>}
    </>
  );
}