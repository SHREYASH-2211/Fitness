import React, { useState } from "react";
import DietCard from "./diet-card.jsx"; 
import "./diet-planner.css";
import Sidebar from "../sidebar/sidebar.jsx";

const DietPlanner = () => {
  const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const [currentMeal, setCurrentMeal] = useState("Breakfast");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // mealPlan: For each meal, store items as an object mapping food title to { cal, count }
  const [mealPlan, setMealPlan] = useState({
    Breakfast: {},
    Lunch: {},
    Dinner: {},
    Snacks: {}
  });

  // Returns meal-specific categories and food items
  const getCategoriesForMeal = (meal) => {
    switch (meal) {
      case "Breakfast":
        return {
          "Breakfast Items": [
            { title: "Poha", calories: 200, image: "https://via.placeholder.com/150?text=Poha" },
            { title: "Idli", calories: 40, image: "https://via.placeholder.com/150?text=Idli" },
            { title: "Dosa", calories: 150, image: "https://via.placeholder.com/150?text=Dosa" },
            { title: "Upma", calories: 250, image: "https://via.placeholder.com/150?text=Upma" },
            { title: "Paratha", calories: 200, image: "https://via.placeholder.com/150?text=Paratha" },
            { title: "Tea", calories: 30, image: "https://via.placeholder.com/150?text=Tea" },
            { title: "Coffee", calories: 50, image: "https://via.placeholder.com/150?text=Coffee" },
            { title: "Jalebi", calories: 180, image: "https://via.placeholder.com/150?text=Jalebi" }
          ]
        };
      case "Lunch":
      case "Dinner":
        return {
          "Main Course": [
            { title: "Roti", calories: 100, image: "https://via.placeholder.com/150?text=Roti" },
            { title: "Chapati", calories: 90, image: "https://via.placeholder.com/150?text=Chapati" },
            { title: "Dal", calories: 150, image: "https://via.placeholder.com/150?text=Dal" },
            { title: "Rice", calories: 130, image: "https://via.placeholder.com/150?text=Rice" },
            { title: "Paneer Bhurji", calories: 200, image: "https://via.placeholder.com/150?text=Paneer+Bhurji" },
            { title: "Aloo Gobi", calories: 180, image: "https://via.placeholder.com/150?text=Aloo+Gobi" },
            { title: "Bhindi Masala", calories: 150, image: "https://via.placeholder.com/150?text=Bhindi+Masala" },
            { title: "Baingan Bharta", calories: 170, image: "https://via.placeholder.com/150?text=Baingan+Bharta" },
            { title: "Palak Paneer", calories: 220, image: "https://via.placeholder.com/150?text=Palak+Paneer" }
          ],
          "Desserts": [
            { title: "Gulab Jamun", calories: 150, image: "https://via.placeholder.com/150?text=Gulab+Jamun" },
            { title: "Rasgulla", calories: 100, image: "https://via.placeholder.com/150?text=Rasgulla" },
            { title: "Ice Cream", calories: 250, image: "https://via.placeholder.com/150?text=Ice+Cream" }
          ]
        };
      case "Snacks":
        return {
          "Snack Items": [
            { title: "Samosa", calories: 250, image: "https://via.placeholder.com/150?text=Samosa" },
            { title: "Bhel Puri", calories: 150, image: "https://via.placeholder.com/150?text=Bhel+Puri" },
            { title: "Kachori", calories: 180, image: "https://via.placeholder.com/150?text=Kachori" },
            { title: "Pakora", calories: 100, image: "https://via.placeholder.com/150?text=Pakora" },
            { title: "Dhokla", calories: 120, image: "https://via.placeholder.com/150?text=Dhokla" },
            { title: "Tea", calories: 30, image: "https://via.placeholder.com/150?text=Tea" },
            { title: "Coffee", calories: 50, image: "https://via.placeholder.com/150?text=Coffee" },
            { title: "Jalebi", calories: 180, image: "https://via.placeholder.com/150?text=Jalebi" }
          ]
        };
      default:
        return {};
    }
  };

  // Function to get all food items across all meals
  const getAllFoodItems = () => {
    const allItems = [];
    
    meals.forEach(meal => {
      const categories = getCategoriesForMeal(meal);
      Object.values(categories).forEach(foodArray => {
        foodArray.forEach(food => {
          allItems.push({
            ...food,
            mealType: meal
          });
        });
      });
    });
    
    return allItems;
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const allItems = getAllFoodItems();
    const filtered = allItems.filter(item => 
      item.title.toLowerCase().includes(query)
    );
    
    setSearchResults(filtered);
  };

  // Get the appropriate categories for the current meal
  const categoriesForMeal = getCategoriesForMeal(currentMeal);

  // Called when a DietCard submits a food item with its selected quantity
  const handleSubmitItem = (food, quantity) => {
    setMealPlan((prev) => {
      const currentMealPlan = prev[currentMeal] || {};
      const existingCount = currentMealPlan[food.title]?.count || 0;
      return {
        ...prev,
        [currentMeal]: {
          ...currentMealPlan,
          [food.title]: { cal: food.calories, count: existingCount + quantity }
        }
      };
    });
  };

  // Handle adding search result to current meal
  const handleAddSearchResult = (food, quantity) => {
    setMealPlan((prev) => {
      const currentMealPlan = prev[currentMeal] || {};
      const existingCount = currentMealPlan[food.title]?.count || 0;
      return {
        ...prev,
        [currentMeal]: {
          ...currentMealPlan,
          [food.title]: { cal: food.calories, count: existingCount + quantity }
        }
      };
    });
    
    // Clear search after adding item
    setSearchQuery("");
    setSearchResults([]);
  };

  // Handle incrementing/decrementing search result quantity
  const handleQuantityChange = (foodId, increment) => {
    const quantityElement = document.getElementById(`quantity-${foodId}`);
    let currentValue = parseInt(quantityElement.innerText);
    
    if (increment) {
      currentValue++;
    } else {
      currentValue = Math.max(0, currentValue - 1);
    }
    
    quantityElement.innerText = currentValue;
  };

  // Delete a food item completely from the current meal
  const handleDelete = (foodTitle) => {
    setMealPlan((prev) => {
      const currentMealPlan = prev[currentMeal] || {};
      const { [foodTitle]: removed, ...rest } = currentMealPlan;
      return { ...prev, [currentMeal]: rest };
    });
  };

  // Calculate total calories for a given meal
  const getMealCalories = (meal) =>
    Object.values(mealPlan[meal] || {}).reduce(
      (sum, { cal, count }) => sum + cal * count,
      0
    );

  const totalDailyCalories = meals.reduce(
    (total, meal) => total + getMealCalories(meal),
    0
  );

  return (
    <>
    <Sidebar />
    <div className="diet-planner">
      
      <h2>Diet Planner</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food items..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Meal Selection */}
      <div className="meal-selector">
        {meals.map((meal) => (
          <button
            key={meal}
            onClick={() => setCurrentMeal(meal)}
            className={`meal-btn ${currentMeal === meal ? "active" : ""}`}
          >
            {meal}
          </button>
        ))}
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <div className="diet-card-container">
            {searchResults.map((food, index) => (
              <div key={`${food.title}-${index}`} className="food-card">
                <img src={food.image} alt={food.title} className="food-image" />
                <h4 className="food-title">{food.title}</h4>
                <p className="food-calories">{food.calories} cal</p>
                <div className="counter">
                  <button 
                    className="counter-btn" 
                    onClick={() => handleQuantityChange(`search-${index}`, false)}
                  >
                    -
                  </button>
                  <span id={`quantity-search-${index}`} className="counter-value">0</span>
                  <button 
                    className="counter-btn" 
                    onClick={() => handleQuantityChange(`search-${index}`, true)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="add-btn"
                  onClick={() => {
                    const quantity = parseInt(document.getElementById(`quantity-search-${index}`).innerText);
                    if (quantity > 0) {
                      handleAddSearchResult(food, quantity);
                    }
                  }}
                >
                  Add to {currentMeal}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display Diet Cards for the current meal options */}
      <h3>{currentMeal} Options</h3>
      {Object.keys(categoriesForMeal).map((category) => (
        <div key={category}>
          <h4>{category}</h4>
          <div className="diet-card-container">
            {categoriesForMeal[category].map((food) => (
              <DietCard key={food.title} food={food} onSubmit={handleSubmitItem} />
            ))}
          </div>
        </div>
      ))}

      {/* Selected Items for the current meal */}
      <h3>{currentMeal} Selections</h3>
      {Object.keys(mealPlan[currentMeal] || {}).length > 0 ? (
        <ul className="selected-items">
          {Object.entries(mealPlan[currentMeal]).map(([title, { cal, count }]) => (
            <li key={title} className="selected-item">
              <span>
                {title} x {count}: {cal * count} cal
              </span>
              <button onClick={() => handleDelete(title)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items selected for {currentMeal}.</p>
      )}
      <h4>{currentMeal} Total: {getMealCalories(currentMeal)} cal</h4>
      <hr />
      <h3>Total Daily Calories: {totalDailyCalories} cal</h3>
    </div>
    </>
  );
};

export default DietPlanner;