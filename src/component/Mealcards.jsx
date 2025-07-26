import React from "react";
import { NavLink } from "react-router-dom";
export const Mealcards = ({ detail }) => {
    console.log(detail)
    return (
        <div className="meals">
            {!detail ? "" : detail.map((item) => {
                return (
                  <div>
                    <img src={item.strMealThumb} />
                    <p>{item.strMeal}</p>
                    <NavLink to={`/${item.idMeal}`}>
                      <button>Recipe</button>
                    </NavLink>
                  </div>
                );
            })
            }
        </div>
    )
}
