import React, { useEffect, useState } from "react";
import A from "./components/Navbar";
import B from "./components/Main";

const App = () => {
  // 1.
  const [name, setName] = useState("nothing");
  const updateMyFunction = (e) => {
    setName(e);
    console.log(e);
  };

  // 2.
  const [count, setCount] = useState(0);
  useEffect(() => {
    const loader = setInterval(() => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    }, 1000);

    return () => {
      clearInterval(loader);
    };
  }, [count]);

  return (
    <>
      <div className="position-relative">
        <div className="position-absolute top-50 start-50 p-5 bg-dark text-white rounded">
          <h1>
            <b>{count}</b>
          </h1>
        </div>

        <A updateMyFunction={updateMyFunction} />
        <B name={name} />
      </div>
    </>
  );
};

export default App;
