
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://whip-cold-pancake.glitch.me/quotes`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  let quotes = data;
  function pickFromArray(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];  }

  return (
    <>
      <button
        className="btn"
        style={{ width: 150, height: 30, backgroundColor: "lightblue" }}
        onClick={pickFromArray}
      >
        Click
      </button>
      {quotes.map(({ quote, author }) => (
        <p
          style={{
            backgroundColor: "#DCDCDC",
            width: 500,
            height: 80,
          }}
        >
          {" "}
          {quote}.
        </p>
      ))}
      );
    </>
  );
}

export default App;