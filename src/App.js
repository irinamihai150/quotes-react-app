import { useEffect, useState } from "react";

// https://whip-cold-pancake.glitch.me/quotes
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

  //  function pickFromArray(data) {
  //    return data[Math.floor(Math.random() * data.length)];
  //  }
  console.log(data);
  let quotes = data;
  return (
    <>
      {quotes.map(({ quote, author }) => (
        <p
          style={{
            backgroundColor: "grey",
            width: 500,
            height: 80,
          }}
          key={author}
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
