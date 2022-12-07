import "./App.css";
import { useState } from "react";
import DisplayJoke from "./components/DisplayJoke";
import Form from "./components/Form";

function App() {
  const [jokeData, setJokeData] = useState({});

  async function getJoke() {
    const response = await fetch(
      "https://dad-jokes.p.rapidapi.com/random/joke",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "43f495d383mshbb1717593b022f2p158027jsn4b72ee28030f",
          "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
        },
      }
    );
    const json = await response.json();
    setJokeData(json);
  }

  return (
    <div className="App">
      <Form getJoke={getJoke} />
      <DisplayJoke joke={jokeData} />
    </div>
  );
}

export default App;
