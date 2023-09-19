import React, { useState, useEffect } from "react";

function Cards(props) {

  const [showMore, setShowMore] = useState(false);
  const [isActive, setActive] = useState(false);

  const card = (
    <div className="card">
      <img className="img" src={props.strMealThumb}></img>
      <h4><b>{props.strMeal}</b></h4>
      <p>{props.strTags}</p>
      <h6>

        <button className="cardButton"
          onClick={toggleClassSetShowMore} >{showMore ? "Minimize" : "Open Recipe"}</button>
      </h6>
    </div>
  )

  const bigcard = (
    <div className="bigcard">
      <img className="float-right" width="39%"  src={props.strMealThumb}></img>
      <h1>This is the recipe for <b>{props.strMeal}</b></h1>
      <h2>It's a <b>{props.strArea}</b> delicacy</h2>
      <h3>Supplies:</h3>
      <strong>{props.strIngredients1}</strong> <br></br>
      <strong>{props.strIngredients2}</strong><br></br>
      <strong>{props.strIngredients3}</strong><br></br>
      <strong>{props.strIngredients4}</strong><br></br>
      <strong>{props.strIngredients5}</strong><br></br>
      <strong>{props.strIngredients6}</strong><br></br>
      <strong>{props.strIngredients7}</strong><br></br>
      <strong>{props.strIngredients8}</strong><br></br>
      <strong>{props.strIngredients9}</strong><br></br>
      <strong>{props.strIngredients10}</strong><br></br>
      <strong>{props.strIngredients11}</strong><br></br>
      <strong>{props.strIngredients12}</strong><br></br>
      <strong>{props.strIngredients13}</strong><br></br>
      <strong>{props.strIngredients14}</strong><br></br>
      <strong>{props.strIngredients15}</strong><br></br>
      <strong>{props.strIngredients16}</strong><br></br>
      <strong>{props.strIngredients17}</strong><br></br>
      <strong>{props.strIngredients18}</strong><br></br>
      <strong>{props.strIngredients19}</strong><br></br>
      <strong>{props.strIngredients20}</strong>

      
      <h3>Instructions:</h3>
      <b>{props.strInstructions}</b>
      <h3>Would you rather have video Instructions</h3>
      <a href={props.strYoutube}>Click Here!!!</a>
      <h6 className="text-center">

        <button className="cardButton"
          onClick={toggleClassSetShowMore} >{showMore ? "Minimize" : "Open Recipe"}</button>
      </h6>
    </div>
  )
  const toggleClass = () => {
    setActive(!isActive);
  };
  function toggleClassSetShowMore() {
    toggleClass();
    setShowMore(!showMore);
  }

  return (
    <div className="inline-block">{isActive ? bigcard : card}</div>
  );
}

export default Cards;