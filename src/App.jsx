import { useState } from "react";

import "./App.css";

// import components here
import NavBar from "./components/NavBar";
import { MyForm } from "./components/MyForm";
import { MyTable } from "./components/MyTable";
import { Counter } from "./components/Counter";

function App() {
  const myDetails = ["John", "Doe"];
  const myDet = {
    name: "John",
    email: "john@doe",
  };

  return (
    <>
      {/* <NavBar
        title="This is passed from props"
        content="This content is passed form props as well"
      /> */}
      {/* <NavBar mydetails={myDetails} /> */}
      {/* <NavBar title="This is my title" /> */}
      {/* <NavBar mydetails={myDetails} /> */}
      {/* <NavBar mydet={myDet} /> */}
      {/* <NavBar>
        <p>This is children</p>
      </NavBar> */}

      {/* <MyForm /> */}

      {/* <MyTable /> */}

      <Counter />
    </>
  );
}

export default App;
