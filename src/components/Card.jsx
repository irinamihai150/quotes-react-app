import React, { useState, useEffect } from "react";
const quoteurl = "https://whip-cold-pancake.glitch.me/quotes";
function Card() {
  const [quote, setQuote] = useState(
    "The longer I live, the more I realize the impact of attitude on life"
  );
  const [author, setAuthor] = useState("Charless Swindon");
  // const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);
  const [query, setQuery] = useState("");

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJson = await response.json();
    setQuotesArray(parsedJson);
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
  //   let filteredQuotes = quotesArray.filter((quote) => {
  //     if (query === "") {
  //       return quote;
  //     } else if (quote.toLowerCase().includes(query.toString.toLowerCase())) {
  //       return quote;
  //     }
  //     return false;
  //   });
  // {

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
          <input
            onChange={(event) => setQuery(event.target.value)}
            id="searchbar"
            type="text"
            name="search"
            placeholder="Search quote.."
          ></input>
        </div>
      </header>
    </div>
  );
}

export default Card;
