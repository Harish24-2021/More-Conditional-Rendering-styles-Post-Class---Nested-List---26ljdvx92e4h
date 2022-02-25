import React from "react";
export default function Town({ towns }) {
  return (
    <>
      {towns.map((ele, index) => {
        return <h4 id={`town${index + 1}`}>{ele.name}</h4>;
      })}
    </>
  );
}