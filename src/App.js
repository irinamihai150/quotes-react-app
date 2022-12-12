import React, { useState, useEffect } from "react";
import "./App.scss";

const quoteurl = "https://whip-cold-pancake.glitch.me/quotes";
function App() {
  const [quote, setQuote] = useState(
    "The longer I live, the more I realize the impact of attitude on life"
  );
  const [author, setAuthor] = useState("Charless Swindon");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJson = await response.json();
    setQuotesArray(parsedJson.quotes);
    console.log(parsedJson);
  };
  useEffect(() => {
    fetchQuotes(quoteurl);
  }, [quoteurl]);

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random());
    console.log(quotesArray.length);
    setRandomNumber(randomNumber);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => getRandomQuote()}>
          Generate a random quote
        </button>
        <p>"{quote}"</p>
        <p> - {author}</p>
      </header>
    </div>
  );
}

export default App;
