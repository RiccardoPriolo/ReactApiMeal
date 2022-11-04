import React, { useState } from "react";
import { Link } from "react-router-dom";


export const List = () => {
  const [input, setInput] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const getItemsList = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    const json = await res.json();

    setItemsList([...json.meals]);
    console.log(json);
  };

  return (
    <div className="search-page">
      <h1>Search the meal you want to cook!</h1>
      <div className="search-section">
        <div className="display-inputs">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            placeholder="Type Here"
          ></input>
          <button onClick={getItemsList}>Submit</button>
        </div>
      </div>

      <div className="display-items">
        {itemsList.map((item) => (
          <Link className="display-title" to={`/details/${item.idMeal}`}>
            <div className="display-search">
              <img className="display-meal" src={item.strMealThumb} />
              <p>{item.strMeal}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
