import React from "react";
import list from "../../public/list.json";

export default function Freebooks() {
  const data = list.filter((d) => d.category === "Free");

  return (
    <>
    
    </>
  );
}
