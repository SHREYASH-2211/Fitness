import  "./login-page.css"

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="features-section">
        <h1 className="main-heading">"Your journey to wellness begins here"</h1>

        <div className="feature-card">
          <div className="feature-icon heart-icon"></div>
          <div className="feature-content">
            <h2>Health Monitoring</h2>
            <p>Track your heart rate, steps, and more with real-time data.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon workout-icon"></div>
          <div className="feature-content">
            <h2>Personalized Workouts</h2>
            <p>Get customized workout plans tailored to your fitness goals.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon meditation-icon"></div>
          <div className="feature-content">
            <h2>Mindfulness & Meditation</h2>
            <p>Access guided meditation sessions to improve your mental well-being.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon nutrition-icon"></div>
          <div className="feature-content">
            <h2>Nutrition Tracking</h2>
            <p>Log your meals and monitor your daily nutritional intake.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon community-icon"></div>
          <div className="feature-content">
            <h2>Community Support</h2>
            <p>Join a community of like-minded individuals for support and motivation.</p>
          </div>
        </div>
      </div>

      <div className="login-section">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <h2>VitalSync</h2>
        </div>
        <p className="login-subtitle">Your journey to wellness begins here</p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="form-input" />
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

