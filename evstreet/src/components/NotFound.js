import React from "react";

import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Oops, it looks like the page does not exist</h1>
      <Link to="/">Click here to go back to the main page</Link>
      <p onClick={() => navigate(-1)}>Or you can go back</p>
    </>
  );
};

export default NotFound;
