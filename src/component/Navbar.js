import React, { useState, useEffect } from "react";

function Navbar(props) {
  const [data, setData] = useState(null);
  const [hidden, setHidden] = useState(true);

  // const {props.data}
  // const [print,setPrint] = useState(false);
  // const data2 = {data}

  function handleChange(input) {
    setData(input.target.value);
  }
  function toggleHidden() {}

  function handleEnter(event) {
    if (event.key === "Enter") {
      fetch(
        createUrl(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
        ),
        {}
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);

          props.setData(json);
        });

      //  setPrint(true)
      // getData(setData)
    }
  }

  function handleEnter2(event) {
    if (event.key === "Enter") {
      fetch(
        createUrl(`www.themealdb.com/api/json/v1/1/filter.php?c=${data}`),
        {}
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);

          props.setData(json);
        });
      //  setPrint(true)
      // getData(setData)
      
    } else if(data=== "all") {
      console.log("hallo");
      fetch(
        createUrl(`https://www.themealdb.com/api/json/v1/1/${data}.php`),
        {}
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);

          props.setData(json);
        });
    }
  }

  function createUrl(url) {
    return `https://cors-anywhere.herokuapp.com/${url}`;
  }

  return (
    <div>
      {hidden ? (
        <nav className="navbar">
          <img className="logo" src={props.logo} alt="logo"></img>
          <div className="navButton" >
            <button className="nav-btn"onClick={() => setHidden(false)}>Recipe</button>
          </div>

          {/* {
          //if print is true then dit else null
          print?
          
         <h1>{data}</h1>
          
   
        :null
          }; */}

          <input
            className="search"
            type="text"
            placeholder="Welke recepten wil je zoeken?"
            onChange={handleChange}
            onKeyPress={handleEnter}
          />
        </nav>
      ) : (
        <nav className="navbar2">
          <img className="logo" src={props.logo} alt="logo"></img>
          {/* {
          //if print is true then dit else null
          print?
          
         <h1>{data}</h1>
          
   
        :null
          }; */}
          <div className="navButton" >
            <button className="nav-btn"onClick={() => setHidden(true)}>Category</button>
          </div>
          <input
            className="search"
            type="text"
            placeholder="Welke category wil je zoeken?"
            onChange={handleChange}
            onKeyPress={handleEnter2}
          />
        </nav>
      )}
    </div>
  );
}
export default Navbar;
