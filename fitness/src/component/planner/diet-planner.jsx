import "./diet-planner.css"
import Sidebar from "../sidebar/sidebar"

const DietPlannerPage = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <div className="diet-header">
          <h1>Diet Planner</h1>
          <p>Track your nutrition and maintain a healthy diet</p>
          <button className="log-meal-button">
            <span className="meal-icon">➕</span>
            Log Meal
          </button>
        </div>

        <div className="macros-section">
          <div className="macro-card">
            <div className="macro-header">
              <span className="macro-icon">🍕</span>
              <span className="macro-target">Target: 2000</span>
            </div>
            <h3>Calories</h3>
            <div className="macro-value">1650</div>
            <div className="macro-progress">
              <div className="progress-bar calories-progress"></div>
            </div>
          </div>

          <div className="macro-card">
            <div className="macro-header">
              <span className="macro-icon">📈</span>
              <span className="macro-target">Target: 120g</span>
            </div>
            <h3>Protein</h3>
            <div className="macro-value">95 g</div>
            <div className="macro-progress">
              <div className="progress-bar protein-progress"></div>
            </div>
          </div>

          <div className="macro-card">
            <div className="macro-header">
              <span className="macro-icon">🍎</span>
              <span className="macro-target">Target: 250g</span>
            </div>
            <h3>Carbs</h3>
            <div className="macro-value">210 g</div>
            <div className="macro-progress">
              <div className="progress-bar carbs-progress"></div>
            </div>
          </div>

          <div className="macro-card">
            <div className="macro-header">
              <span className="macro-icon">☕</span>
              <span className="macro-target">Target: 65g</span>
            </div>
            <h3>Fat</h3>
            <div className="macro-value">55 g</div>
            <div className="macro-progress">
              <div className="progress-bar fat-progress"></div>
            </div>
          </div>
        </div>

        <div className="meals-section">
          <div className="meal-card">
            <div className="meal-header">
              <h3>Breakfast</h3>
              <span className="meal-time">8:00 AM</span>
            </div>
            <div className="meal-content">
              <div className="meal-image breakfast-image"></div>
              <div className="meal-details">
                <div className="meal-item">
                  <span className="item-icon">🥣</span>
                  <span className="item-name">Oatmeal</span>
                </div>
                <div className="meal-item">
                  <span className="item-icon">🍌</span>
                  <span className="item-name">Banana</span>
                </div>
                <div className="meal-item">
                  <span className="item-icon">🥜</span>
                  <span className="item-name">Almonds</span>
                </div>
                <button className="view-details-button">View Details</button>
              </div>
            </div>
            <div className="meal-calories">450 cal</div>
          </div>

          <div className="meal-card">
            <div className="meal-header">
              <h3>Lunch</h3>
              <span className="meal-time">1:00 PM</span>
            </div>
            <div className="meal-content">
              <div className="meal-image lunch-image"></div>
              <div className="meal-details">
                <div className="meal-item">
                  <span className="item-icon">🍗</span>
                  <span className="item-name">Grilled Chicken</span>
                </div>
                <div className="meal-item">
                  <span className="item-icon">🌱</span>
                  <span className="item-name">Quinoa</span>
                </div>
                <div className="meal-item">
                  <span className="item-icon">🥦</span>
                  <span className="item-name">Vegetables</span>
                </div>
                <button className="view-details-button">View Details</button>
              </div>
            </div>
            <div className="meal-calories">650 cal</div>
          </div>

          <div className="meal-card">
            <div className="meal-header">
              <h3>Dinner</h3>
              <span className="meal-time">7:00 PM</span>
            </div>
            <div className="meal-content">
              <div className="meal-image dinner-image"></div>
              <div className="meal-details">
                <div className="meal-item">
                  <span className="item-icon">🐟</span>
                  <span className="item-name">Salmon</span>
                </div>
                <div className="meal-item">
                  <span className="item-icon">🍚</span>
                  <span className="item-name">Brown Rice</span>
                </div>
                <div className="meal-item">
                  <span className="item-icon">🥦</span>
                  <span className="item-name">Broccoli</span>
                </div>
                <button className="view-details-button">View Details</button>
              </div>
            </div>
            <div className="meal-calories">550 cal</div>
          </div>
        </div>

        <div className="weekly-progress">
          <h2>Weekly Progress</h2>
          <div className="week-days">
            <div className="day">
              <span className="day-name">Mon</span>
              <div className="day-bar">
                <div className="day-progress" style={{ height: "80%" }}></div>
              </div>
              <span className="day-value">1698</span>
            </div>
            <div className="day">
              <span className="day-name">Tue</span>
              <div className="day-bar">
                <div className="day-progress" style={{ height: "100%" }}></div>
              </div>
              <span className="day-value">2397</span>
            </div>
            <div className="day">
              <span className="day-name">Wed</span>
              <div className="day-bar">
                <div className="day-progress" style={{ height: "85%" }}></div>
              </div>
              <span className="day-value">1899</span>
            </div>
            <div className="day">
              <span className="day-name">Thu</span>
              <div className="day-bar">
                <div className="day-progress" style={{ height: "90%" }}></div>
              </div>
              <span className="day-value">2149</span>
            </div>
            <div className="day">
              <span className="day-name">Fri</span>
              <div className="day-bar">
                <div className="day-progress" style={{ height: "95%" }}></div>
              </div>
              <span className="day-value">2227</span>
            </div>
            <div className="day">
              <span className="day-name">Sat</span>
              <div className="day-bar">
                <div className="day-progress" style={{ height: "92%" }}></div>
              </div>
              <span className="day-value">2202</span>
            </div>
            <div className="day">
              <span className="day-name">Sun</span>
              <div className="day-bar">
                <div className="day-progress" style={{ height: "88%" }}></div>
              </div>
              <span className="day-value">2095</span>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default DietPlannerPage

