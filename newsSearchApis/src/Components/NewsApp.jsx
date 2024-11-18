import React, { useState, useEffect } from "react";
import Card from "./Card";

const NewsApp = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState([]);
  const API_KEY = "46d0f0dd84284f218dbda86fd5d08266";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jasonData = await response.json();
    console.log(jasonData.articles);
    setNewsData(jasonData.articles);
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleInput = (e) => {
    setSearch(e.target.value);
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
        {newsData.length === 0 ? <p>Loading...</p> : <Card data={newsData} />}
      </div>
    </>
  );
};

export default NewsApp;
