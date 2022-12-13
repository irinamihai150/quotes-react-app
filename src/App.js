import React, { useState, useEffect } from "react";
import "./App.scss";

const quoteurl = "https://whip-cold-pancake.glitch.me/quotes";
function App() {
  const [quote, setQuote] = useState(
    "The longer I live, the more I realize the impact of attitude on life"
  );
  const [author, setAuthor] = useState("Charless Swindon");
  // const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJson = await response.json();
    setQuotesArray(parsedJson);
    console.log(parsedJson);
  };
  useEffect(() => {
    fetchQuotes(quoteurl);
  }, []);

  let getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random());
    // setRandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          {/* <h1> Random Number :{randomNumber}</h1> */}
          <p id="text">" {quote} "</p>
          <p id="author"> - {author}</p>
          <button id="new-quote" onClick={() => getRandomQuote()}>
            Generate a quote
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
