import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { idCountry } = useParams();

  return (
    <div>
      Detail
      <h1>{idCountry}</h1>
    </div>
  );
};

export default Detail;
