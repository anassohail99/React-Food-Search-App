import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [querry, setQuerry] = useState("");

  const app_Id = "cc9a6004";
  const app_Key = "68b182a77a2ab0b581c11d896c2ccb49";
  const url = `https://api.edamam.com/search?q=${querry}&app_id=${app_Id}&app_key=${app_Key}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
  };

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  const onChange = e => {
    setQuerry(e.target.value);
  };
  return (
    <div className="App">
      <h1>FOOD SEARCHING APP</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default App;
