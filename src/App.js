import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Recipie from "./Components/Recipie";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Components/Alert";

const App = () => {
  const [querry, setQuerry] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [alert, setAlert] = useState("");

  const app_Id = "cc9a6004";
  const app_Key = "68b182a77a2ab0b581c11d896c2ccb49";
  const url = `https://api.edamam.com/search?q=${querry}&app_id=${app_Id}&app_key=${app_Key}`;

  const getData = async () => {
    if (querry !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No such food found");
      }
      setRecipies(result.data.hits);
      setAlert("");
      setQuerry("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuerry(e.target.value);
  };
  return (
    <div className="App">
      <h1>FOOD SEARCHING APP</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
          value={querry}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipies !== [] &&
          recipies.map((recipie) => (
            <Recipie key={uuidv4()} recipie={recipie} />
          ))}
      </div>
    </div>
  );
};

export default App;
// https://youtu.be/d1vT4kkTCaw?list=PLpOejIRxf6_ejmtmkdNX0EvZS89TW0TDC&t=1366
