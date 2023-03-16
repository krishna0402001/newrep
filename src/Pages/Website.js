import React from "react";
import { useLocation } from "react-router-dom";

const Website = () => {
  const { state } = useLocation();
  console.log(state);
  return <div></div>;
};

export default Website;
