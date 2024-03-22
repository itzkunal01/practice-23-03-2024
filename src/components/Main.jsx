import React from "react";

const Main = ({ name }) => {
  return (
    <>
      <div className="text-center p-5 text-danger text-uppercase">
        <h2>
          <b>This is my {name} section.</b>
        </h2>
      </div>
    </>
  );
};

export default Main;
