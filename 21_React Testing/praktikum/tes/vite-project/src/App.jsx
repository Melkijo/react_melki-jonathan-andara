import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const checkName = (e) => {
    setName(e.target.value);
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(name)) {
      alert("loh");
    }
  };
  return (
    <div>
      <h1>Hallo</h1>
      <form action="">
        <label htmlFor="">Nama: </label>
        <input type="text" onChange={checkName} value={name} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
