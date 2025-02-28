import "./meditation.css"
import Sidebar from "../sidebar/sidebar.jsx"

const MeditationPage = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <div className="meditation-header">
          <h1>Meditation & Mindfulness</h1>
          <p>Find your inner peace with guided meditation sessions</p>
        </div>

        <div className="daily-meditation">
          <div className="daily-content">
            <h2>Daily Meditation</h2>
            <p>10-minute guided session for inner peace</p>
            <div className="session-info">
              <span className="duration">⏱️ 10 minutes</span>
              <span className="type">🧘 Guided</span>
            </div>
          </div>
          <button className="play-button">▶️</button>
        </div>

        <div className="meditation-sessions">
          <div className="session-card">
            <div className="session-image morning-mindfulness-image">
              <div className="session-icon">☀️</div>
            </div>
            <div className="session-details">
              <h3>Morning Mindfulness</h3>
              <p className="session-duration">10 min</p>
              <button className="start-button">Start</button>
            </div>
          </div>

          <div className="session-card">
            <div className="session-image deep-relaxation-image">
              <div className="session-icon">🌙</div>
            </div>
            <div className="session-details">
              <h3>Deep Relaxation</h3>
              <p className="session-duration">20 min</p>
              <button className="start-button">Start</button>
            </div>
          </div>

          <div className="session-card">
            <div className="session-image stress-relief-image">
              <div className="session-icon">💨</div>
            </div>
            <div className="session-details">
              <h3>Stress Relief</h3>
              <p className="session-duration">15 min</p>
              <button className="start-button">Start</button>
            </div>
          </div>

          <div className="session-card">
            <div className="session-image sleep-better-image">
              <div className="session-icon">☁️</div>
            </div>
            <div className="session-details">
              <h3>Sleep Better</h3>
              <p className="session-duration">30 min</p>
              <button className="start-button">Start</button>
            </div>
          </div>
        </div>

        <div className="meditation-stats">
          <div className="stat-card">
            <div className="stat-icon mindfulness-icon">☀️</div>
            <div className="stat-details">
              <h3>Mindfulness Streak</h3>
              <p className="stat-value">7 days</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon time-icon">⏱️</div>
            <div className="stat-details">
              <h3>Total Minutes</h3>
              <p className="stat-value">420 min</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stress-icon">💨</div>
            <div className="stat-details">
              <h3>Stress Reduction</h3>
              <p className="stat-value">32%</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default MeditationPage

