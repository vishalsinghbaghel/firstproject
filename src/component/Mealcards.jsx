import React from "react";
import { useNavigate } from "react-router-dom";
import { LoadingComponent } from "../common/LoadingComponent";
export const Mealcards = ({ detail }) => {
  const buttonStyle = {
    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
    color: "white",
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "30px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };
  const hoverStyle = {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #a777e3, #6e8efb)",
  };
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();
  const recipeClickHandler = (id) => {
    navigate("/" + id);
  };

  return (
    <div className="meals">
      {!detail ? (
        <LoadingComponent loading="loading"></LoadingComponent>
      ) : (
        detail.map((item) => {
          return (
            <div>
              <img src={item.strMealThumb} />
              <p>{item.strMeal}</p>
              <button
                style={
                  isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => recipeClickHandler(item.idMeal)}
              >
                Recipe
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};
