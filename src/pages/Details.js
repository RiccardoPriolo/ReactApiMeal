import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Details() {
  const [mealDetails, setData] = useState({});

  const { id } = useParams("id");

  async function fetchDetails() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const json = await response.json();

    setData({
      ...json.meals[0],
    });
    console.log(json);
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <div className="display-details">
        <h2>Meal: {mealDetails.strMeal}</h2>

        <img className="display-meal" src={mealDetails.strMealThumb} />

        <h4>Area: {mealDetails.strArea}</h4>
        <h4>Ingredients: {mealDetails.strIngredient1}</h4>
        <h3>
          <strong>Wanna cook this? Do it! </strong>
        </h3>
        <p className="display-instructions"><strong>Instructions: </strong>{mealDetails.strInstructions}</p>
      </div>
    </>
  );
}
