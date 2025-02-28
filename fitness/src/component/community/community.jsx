import "./community.css"
import Sidebar from "../sidebar/sidebar.jsx"

const CommunityPage = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <div className="community-header">
          <h1>Community</h1>
          <p>Connect with fellow wellness enthusiasts</p>
          <button className="new-post-button">
            <span className="post-icon">✏️</span>
            New Post
          </button>
        </div>

        <div className="posts-container">
          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <div className="user-avatar"></div>
                <div className="user-details">
                  <h3>Sanyogeeta</h3>
                  <p className="user-role">Fitness Pro</p>
                </div>
              </div>
              <div className="post-category">Success Story</div>
            </div>

            <div className="post-content">
              <p>Just completed a 30-day yoga challenge! Here's what I learned about consistency and mindfulness...</p>
              <div className="post-image yoga-image"></div>
            </div>

            <div className="post-actions">
              <div className="action-button">
                <span className="action-icon">❤️</span>
                <span className="action-count">234</span>
              </div>
              <div className="action-button">
                <span className="action-icon">💬</span>
                <span className="action-count">45</span>
              </div>
              <div className="action-button">
                <span className="action-icon">↗️</span>
                <span className="action-count">12</span>
              </div>
            </div>
          </div>

          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <div className="user-avatar"></div>
                <div className="user-details">
                  <h3>Harsh Patil</h3>
                  <p className="user-role">Nutrition Expert</p>
                </div>
              </div>
              <div className="post-category">Nutrition Tips</div>
            </div>

            <div className="post-content">
              <p>
                Quick tip: Start your day with a glass of warm lemon water to boost your metabolism and improve
                digestion...
              </p>
              <div className="post-image lemon-water-image"></div>
            </div>

            <div className="post-actions">
              <div className="action-button">
                <span className="action-icon">❤️</span>
                <span className="action-count">156</span>
              </div>
              <div className="action-button">
                <span className="action-icon">💬</span>
                <span className="action-count">23</span>
              </div>
              <div className="action-button">
                <span className="action-icon">↗️</span>
                <span className="action-count">8</span>
              </div>
            </div>
          </div>

          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <div className="user-avatar"></div>
                <div className="user-details">
                  <h3>Aarya narang</h3>
                  <p className="user-role">Wellness Coach</p>
                </div>
              </div>
              <div className="post-category">Community</div>
            </div>

            <div className="post-content">
              <p>Looking for meditation buddies! Join our daily morning meditation sessions starting next week...</p>
              <div className="post-image meditation-image"></div>
            </div>

            <div className="post-actions">
              <div className="action-button">
                <span className="action-icon">❤️</span>
                <span className="action-count">89</span>
              </div>
              <div className="action-button">
                <span className="action-icon">💬</span>
                <span className="action-count">34</span>
              </div>
              <div className="action-button">
                <span className="action-icon">↗️</span>
                <span className="action-count">5</span>
              </div>
            </div>
          </div>

          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <div className="user-avatar"></div>
                <div className="user-details">
                  <h3>Hitanshu rathi</h3>
                  <p className="user-role">Yoga Enthusiast</p>
                </div>
              </div>
              <div className="post-category">Yoga</div>
            </div>

            <div className="post-content">
              <p>Exploring the benefits of daily yoga practice. Join me on this journey!</p>
              <div className="post-image yoga-practice-image"></div>
            </div>

            <div className="post-actions">
              <div className="action-button">
                <span className="action-icon">❤️</span>
                <span className="action-count">120</span>
              </div>
              <div className="action-button">
                <span className="action-icon">💬</span>
                <span className="action-count">30</span>
              </div>
              <div className="action-button">
                <span className="action-icon">↗️</span>
                <span className="action-count">10</span>
              </div>
            </div>
          </div>

          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <div className="user-avatar"></div>
                <div className="user-details">
                  <h3>Aayush Kolte</h3>
                  <p className="user-role">Health Coach</p>
                </div>
              </div>
              <div className="post-category">Nutrition</div>
            </div>

            <div className="post-content">
              <p>Top 5 healthy snacks to keep you energized throughout the day.</p>
              <div className="post-image healthy-snacks-image"></div>
            </div>

            <div className="post-actions">
              <div className="action-button">
                <span className="action-icon">❤️</span>
                <span className="action-count">200</span>
              </div>
              <div className="action-button">
                <span className="action-icon">💬</span>
                <span className="action-count">40</span>
              </div>
              <div className="action-button">
                <span className="action-icon">↗️</span>
                <span className="action-count">15</span>
              </div>
            </div>
          </div>

          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <div className="user-avatar"></div>
                <div className="user-details">
                  <h3>Khyati sharma</h3>
                  <p className="user-role">Fitness Trainer</p>
                </div>
              </div>
              <div className="post-category">Fitness</div>
            </div>

            <div className="post-content">
              <p>Join our community workout sessions every weekend!</p>
              <div className="post-image community-workout-image"></div>
            </div>

            <div className="post-actions">
              <div className="action-button">
                <span className="action-icon">❤️</span>
                <span className="action-count">180</span>
              </div>
              <div className="action-button">
                <span className="action-icon">💬</span>
                <span className="action-count">50</span>
              </div>
              <div className="action-button">
                <span className="action-icon">↗️</span>
                <span className="action-count">20</span>
              </div>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  )
}

export default CommunityPage

