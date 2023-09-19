import "./navbar.css";
import "./cards.css";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";

// import createUrl from './createUrl.js'
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar logo="./img/logo4.png" setData={setData} />
        {/* { data !=null ? data.meals.map(
    // (info) => { return <Cards strMeal={info.strMeal} />
    (info) => { return "test"

    }
) : <div></div>} */}
    <div className="">
        {data != null
          ? data.meals.map((meal, i) => (
              <Cards key={i} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} strCategory={meal.strCategory} strArea={meal.strArea} 
              strTags={meal.strTags} strInstructions={meal.strInstructions} strYoutube={meal.strYoutube}
              strIngredients1={meal.strIngredient1 +" "+ meal.strMeasure1} 
              strIngredients2={meal.strIngredient2 +" "+ meal.strMeasure2}
              strIngredients3={meal.strIngredient3 +" "+ meal.strMeasure3}
              strIngredients4={meal.strIngredient4 +" "+ meal.strMeasure4}
              strIngredients5={meal.strIngredient5 +" "+ meal.strMeasure5}
              strIngredients6={meal.strIngredient6 +" "+ meal.strMeasure6}
              strIngredients7={meal.strIngredient7 +" "+ meal.strMeasure7}
              strIngredients8={meal.strIngredient8 +" "+ meal.strMeasure8}
              strIngredients9={meal.strIngredient9 +" "+ meal.strMeasure9}
              strIngredients10={meal.strIngredient10 +" "+ meal.strMeasure10}
              strIngredients11={meal.strIngredient11 +" "+ meal.strMeasure11}
              strIngredients12={meal.strIngredient12 +" "+ meal.strMeasure12}
              strIngredients13={meal.strIngredient13 +" "+ meal.strMeasure13}
              strIngredients14={meal.strIngredient14 +" "+ meal.strMeasure14}
              strIngredients15={meal.strIngredient15 +" "+ meal.strMeasure15}
              strIngredients16={meal.strIngredient16 +" "+ meal.strMeasure16}
              strIngredients17={meal.strIngredient17 +" "+ meal.strMeasure17}
              strIngredients18={meal.strIngredient18 +" "+ meal.strMeasure18}
              strIngredients19={meal.strIngredient19 +" "+ meal.strMeasure19}
              strIngredients20={meal.strIngredient20 +" "+ meal.strMeasure20} />
            ))
          : null}
          </div>
      </header>
    </div>
  );
}

export default App;
