import React from "react";

const Navbar = ({ updateMyFunction }) => {
  const data = ["home", "hero", "spider-man", "batman"];
  return (
    <>
      <div className="d-flex align-items-center justify-content-center gap-2 py-5">
        {data.map((obj, index) => (
          <button key={index} onClick={() => updateMyFunction(obj)}>
            {obj}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
