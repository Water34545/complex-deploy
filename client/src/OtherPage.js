import React from "react";
import {Link} from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      other page!
      <Link to="/">Go home!</Link>
    </div>
  );
};

export default OtherPage;