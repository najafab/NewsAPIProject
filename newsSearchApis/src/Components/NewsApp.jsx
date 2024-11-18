import React, { useState, useEffect } from "react";
import Card from "./Card";

const NewsApp = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState([]); // Default to empty array
  const API_KEY = "46d0f0dd84284f218dbda86fd5d08266";

  // Function to fetch data based on the search term
  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jasonData = await response.json();
    console.log(jasonData.articles); // Logging the response
    setNewsData(jasonData.articles); // Set news data to state
  };

  // This will run once when the component mounts
  useEffect(() => {
    getData();
  }, [search]); // Re-fetch data when 'search' changes

  // Handling search input changes
  const handleInput = (e) => {
    setSearch(e.target.value); // Update search state
  };

  return (
    <>
      <nav>
        <div>
          <h1>Najaf Abbas</h1>
        </div>
        <ul>
          <a href="">All News</a>
          <a href="">Trendings</a>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className="categoryBtn">
        <button onClick={() => setSearch("sports")}>Sports</button>
        <button onClick={() => setSearch("politics")}>Politics</button>
        <button onClick={() => setSearch("entertainment")}>
          Entertainment
        </button>
        <button onClick={() => setSearch("health")}>Health</button>
        <button onClick={() => setSearch("fitness")}>Fitness</button>
      </div>

      <div>
        {/* Conditional rendering: show loading until data is fetched */}
        {newsData.length === 0 ? <p>Loading...</p> : <Card data={newsData} />}
      </div>
    </>
  );
};

export default NewsApp;
