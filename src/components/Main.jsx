import React from "react";

const Main = ({ name }) => {
  return (
    <>
      <div className="text-center p-5 text-danger text-uppercase">
        <h2>This is my {name} section.</h2>
      </div>
    </>
  );
};

export default Main;
