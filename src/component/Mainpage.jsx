import { useCallback, useEffect, useState } from "react";
import { Mealcards } from "./Mealcards";
import { useFetch } from "../custom-hook/useFetch";
export const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const get = useFetch();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const getInitialData = useCallback(async () => {
    const meals = await get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s"
    );
    setData(meals);
  }, [get]);

  useEffect(() => {
    getInitialData();
  }, [getInitialData]);

  const myFun = async () => {
    if (search == "") {
      setMsg("Please Enter Something ");
    } else {
      const meals = await get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (meals.lenght) setData(meals);
      else {
        setMsg("No Data Found");
        setData([]); // Clear data if no meals found
      }
    }
  };

  return (
    <>
      <h1 className="title">🍽️ Food Recipe Explorer</h1>{" "}
      <div className="container">
        <div className="searchBar">
          <input type="text" placeholder="Enter Dish" onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <h3 className="error">{msg}</h3>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
};
