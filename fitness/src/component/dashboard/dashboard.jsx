import "./dashboard.css"
import Sidebar from "../sidebar/sidebar.jsx"
// import React from "react";
// import Nav from "./Nav";
// import Cards from "./Cards";
// import ActivityCalendar from "./ActivityCalender";
// import ActivitiesList from "./ActivityList";
import Graphs from "./Graph.jsx";
// import "../Styles/Dashboard.css";
// import "./ChatBot"
// import ChatBot from "./ChatBot";

const Dashboard = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <header className="header">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="notifications">
            <span className="notification-icon">🔔</span>
          </div>
        </header>

        <div className="welcome-section">
          <h1>Welcome back, Aayush!</h1>
          <p className="subtitle">Here's your health overview for today</p>
        </div>

        <div className="metrics-section">
          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-icon">❤️</span>
              <span>Heart Rate</span>
            </div>
            <div className="metric-value">72 bpm</div>
            <div className="metric-progress">
              <div className="progress-bar heart-progress"></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-icon">💧</span>
              <span>Hydration</span>
            </div>
            <div className="metric-value">75%</div>
            <div className="metric-progress">
              <div className="progress-bar hydration-progress"></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-icon">😴</span>
              <span>Sleep</span>
            </div>
            <div className="metric-value">7.5h</div>
            <div className="metric-progress">
              <div className="progress-bar sleep-progress"></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-icon">😓</span>
              <span>Stress</span>
            </div>
            <div className="metric-value">35%</div>
            <div className="metric-progress">
              <div className="progress-bar stress-progress"></div>
            </div>
          </div>
        </div>


        <Graphs/>

        <div className="dashboard-grid">
          <div className="schedule-section">
            <div className="section-header">
              <h2>Today's Schedule</h2>
              <span className="date">March 14, 2024</span>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Morning Yoga</h3>
                    <span className="time">07:00 AM</span>
                  </div>
                  <p>Start your day with energizing poses</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Meditation Session</h3>
                    <span className="time">09:00 AM</span>
                  </div>
                  <p>15-minute mindfulness practice</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Nutrition Check</h3>
                    <span className="time">01:00 PM</span>
                  </div>
                  <p>Track your lunch and water intake</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Evening Workout</h3>
                    <span className="time">05:00 PM</span>
                  </div>
                  <p>Strength training session</p>
                </div>
              </div>
            </div>
          </div>

          <div className="insights-section">
            <h2>AI Insights</h2>

            <div className="insight-card">
              <h3>Hydration Alert</h3>
              <p>You're slightly below your daily water goal. Consider drinking a glass of water now.</p>
            </div>

            <div className="insight-card">
              <h3>Sleep Pattern</h3>
              <p>Your sleep quality has improved by 15% this week. Keep maintaining your bedtime routine!</p>
            </div>

            <div className="insight-card">
              <h3>Workout Suggestion</h3>
              <p>Based on your goals, we recommend a 30-minute strength training session today.</p>
            </div>
          </div>
        </div>

        <div className="achievements-section">
          <h2>Achievement Badges</h2>

          <div className="badges-container">
            <div className="badge-card">
              <div className="badge-icon fitness-badge">👑</div>
              <h3>Fitness Royalty</h3>
              <p>Completed 100 workouts</p>
            </div>

            <div className="badge-card">
              <div className="badge-icon power-badge">⚡</div>
              <h3>Power Warrior</h3>
              <p>Hit personal records 10 times</p>
            </div>

            <div className="badge-card">
              <div className="badge-icon goal-badge">🎯</div>
              <h3>Goal Crusher</h3>
              <p>Achieved all monthly targets</p>
            </div>

            <div className="badge-card">
              <div className="badge-icon streak-badge">🔥</div>
              <h3>Streak Master</h3>
              <p>30-day workout streak</p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
}

export default Dashboard

