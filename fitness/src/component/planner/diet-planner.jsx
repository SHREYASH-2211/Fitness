import React, { useState } from "react";
import DietCard from "./diet-card.jsx"; 
import "./diet-planner.css";
import Sidebar from "../sidebar/sidebar.jsx";
<script src="https://unpkg.com/@tailwindcss/browser@4"></script>
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
            { title: "Poha", calories: 200, image: "https://media.istockphoto.com/id/1093261264/photo/aloo-kanda-poha-or-tarri-pohe-with-spicy-chana-masala-curry-selective-focus.jpg?s=2048x2048&w=is&k=20&c=xKoCqqLZTditwRvnnFH5h3Qkc2A51CfGciSUzDOajco=" },
            { title: "Idli", calories: 40, image: "https://media.istockphoto.com/id/182491284/photo/idli-sambhar-and-chutney-south-indian-dish-on-banana-leaf.jpg?s=2048x2048&w=is&k=20&c=BrMfyUIkRZKH0Gg6bW2CiyxHArNzMHIL0SBqzmLnfe4=" },
            { title: "Dosa", calories: 150, image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?q=80&w=2475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Upma", calories: 250, image: "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.jpg?s=2048x2048&w=is&k=20&c=DPxyBb3cAyA8UOKNS37OuNIxykrFLS04Y4cGzdInIbA=" },
            { title: "Paratha", calories: 200, image: "https://media.istockphoto.com/id/173902636/photo/paratha-indian-flatbread.jpg?s=2048x2048&w=is&k=20&c=ZEg0i-CufxFja3NwrtEqJGrh0zLOMtdj0kydZbd-g04=" },
            { title: "Tea", calories: 30, image: "https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.jpg?s=1024x1024&w=is&k=20&c=6VGOiN8H6F1uhTwMxUNLXnUqmd8viaLwChR_JNEMYoI=" },
            { title: "Coffee", calories: 50, image: "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=3449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Jalebi", calories: 180, image: "https://media.istockphoto.com/id/1406503800/photo/special-indian-sweet-jalebi-or-jilabi-jeelebi-and-jilapi-served-in-dish-isolated-on-dark.jpg?s=2048x2048&w=is&k=20&c=qX8IrqM5aBxRzYxnveM7xnSfR7UNLnP1d3hUHOr1NA0=" }
          ]
        };
      case "Lunch":
      case "Dinner":
        return {
          "Main Course": [
            { title: "Roti", calories: 100, image: "https://plus.unsplash.com/premium_photo-1675382377369-c8f4cd69cfee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm90aXxlbnwwfHwwfHx8MA%3D%3D" },
            { title: "Chapati", calories: 90, image: "https://plus.unsplash.com/premium_photo-1675382377369-c8f4cd69cfee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm90aXxlbnwwfHwwfHx8MA%3D%3D" },
            { title: "Dal", calories: 150, image: "https://images.unsplash.com/photo-1626500154744-e4b394ffea16?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Rice", calories: 130, image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Paneer Bhurji", calories: 200, image: "https://media.istockphoto.com/id/1292628415/photo/paneer-bhurji-is-a-famous-indian-dish-served-over-a-rustic-wooden-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=MfzEuPTnLZMlSd5vk1cAL8mFJ0NX4FvqFfWTEDYnUM4=" },
            { title: "Aloo Gobi", calories: 180, image: "https://media.istockphoto.com/id/187509509/photo/gobi-aloo-indian-curry-dish.jpg?s=2048x2048&w=is&k=20&c=Ht5HObPLMB87zG9sqX_qIn8qFxjXWUUetPlW8KvKT-4=" },
            { title: "Bhindi Masala", calories: 150, image: "https://media.istockphoto.com/id/516316282/photo/indian-masala-fried-bhindi-or-ladyfinger-curry.jpg?s=2048x2048&w=is&k=20&c=sNRLk9CRTMilOcr4fAfAXs4OhjGppcUAWwn8s-Wj2Ms=" },
            { title: "Baingan Bharta", calories: 170, image: "https://media.istockphoto.com/id/2202290924/photo/smoky-roasted-baingan-bharta.jpg?s=2048x2048&w=is&k=20&c=gwrPghA-h2DKDiP8QQZDehrEvQ1qIzGtGTGc_hgevyI=" },
            { title: "Palak Paneer", calories: 220, image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D" }
          ],
          "Desserts": [
            { title: "Gulab Jamun", calories: 150, image: "https://images.unsplash.com/photo-1646578515903-67873a5398f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHx8MA%3D%3D" },
            { title: "Rasgulla", calories: 100, image: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzZ3VsbGF8ZW58MHx8MHx8fDA%3D" },
            { title: "Ice Cream", calories: 250, image: "https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D" }
          ]
        };
      case "Snacks":
        return {
          "Snack Items": [
            { title: "Samosa", calories: 250, image: "https://plus.unsplash.com/premium_photo-1695297516676-04a259917c03?q=80&w=3543&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bhel Puri", calories: 150, image: "https://media.istockphoto.com/id/2075152539/photo/tasty-bhelpuri-is-a-savoury-snack-or-chaat-it-is-made-out-of-puffed-rice-vegetables-and-a.jpg?s=2048x2048&w=is&k=20&c=3nxg39iQVWtJGqmaKgqFNpNKNUzVgaKY2orT7mcpqvs=" },
            { title: "Kachori", calories: 180, image: "https://images.unsplash.com/photo-1591465619385-1ef36826b8bd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Pakora", calories: 100, image: "https://images.unsplash.com/photo-1666190091191-0cd0c5c8c5b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Dhokla", calories: 120, image: "https://media.istockphoto.com/id/1257018928/photo/gujarati-khaman-dhokla-or-steamed-gram-flour-puffy-snack-cake.jpg?s=2048x2048&w=is&k=20&c=_MlIFZ0ua2I19bMXEv3Q-ryruVlWCs45NKMKpamuzWE=" },
            { title: "Tea", calories: 30, image: "https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.jpg?s=1024x1024&w=is&k=20&c=6VGOiN8H6F1uhTwMxUNLXnUqmd8viaLwChR_JNEMYoI=" },
            { title: "Coffee", calories: 50, image: "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=3449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Jalebi", calories: 180, image: "https://media.istockphoto.com/id/1406503800/photo/special-indian-sweet-jalebi-or-jilabi-jeelebi-and-jilapi-served-in-dish-isolated-on-dark.jpg?s=2048x2048&w=is&k=20&c=qX8IrqM5aBxRzYxnveM7xnSfR7UNLnP1d3hUHOr1NA0=" }
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
    <div className="diet-planner w-full px-4 md:px-8 lg:px-16">
      
      <h2>Diet Planner</h2>

      {/* Search Bar */}
      <div className="search-container1">
        <input
          type="text"
          placeholder="Search for food items..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input1"
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