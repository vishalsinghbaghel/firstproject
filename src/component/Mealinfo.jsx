import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingComponent } from "../common/LoadingComponent";
import { useFetch } from "../custom-hook/useFetch";
export const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  const get = useFetch();

  const getInfo = useCallback(async () => {
    const mealInfo = await get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    setInfo(mealInfo[0]);
  }, [get, mealid]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <>
      {!info ? (
        <LoadingComponent loading="loading"></LoadingComponent>
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} />
          <div className="info">
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
};
