import React from "react";
import A from "./components/Navbar";
import B from "./components/Main";

const App = () => {
  const [name, setName] = React.useState("nothing");
  const updateMyFunction = (e) => {
    setName(e);
    console.log(e);
  };

  return (
    <>
      <A updateMyFunction={updateMyFunction} />
      <B name={name} />
    </>
  );
};

export default App;
