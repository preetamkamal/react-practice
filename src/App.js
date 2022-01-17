import React, { useState } from "react";
import "./App2.css";

function App() {
  const [show, setShow] = useState("");
  const [secondData, setSecondData] = useState(false);
  let pp = "";
  const showData = (e) => {
    console.log("inside a function:" + show.length);

    setShow(e.target.value);
  };
  if (show.length > 5) {
    pp = "Data displayed";
  }
  console.log("outside a function" + show.length);
  const showSecondData = () => {
    setSecondData(!secondData);
  };
  return (
    <div>
      <div className="square">
        <input type="text" value={show} onChange={(e) => showData(e)} />
        <p>{show.length > 5 ? "Data is display: " + show : ""}</p>
        <button onClick={showSecondData}>getdata</button>
        {secondData ? "2nd data is displayed" : ""}
        <div className="container">
          <div className="small-square"></div>
          <div className="small-square"></div>
          <div className="small-square"></div>
        </div>
      </div>
      <button className="btn btn-danger button">Click me</button>
    </div>
  );
}

export default App;
