import "./community.css"
import Sidebar from "../sidebar/sidebar.jsx"
// import community1 from "./src/images/community1.jpg"
// import lemonWater from "./src/images/community1.jpg"
// import meditation from "./src/images/community1.jpg"
// import yogaPractice from "./src/images/community1.jpg"
// import healthySnacks from "./src/images/community1.jpg"
// import communityWorkout from "./src/images/community1.jpg"

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
                  <h3>Shreyash Singh</h3>
                  <p className="user-role">Fitness Pro</p>
                </div>
              </div>
              <div className="post-category">Success Story</div>
            </div>

            <div className="post-content">
              <p>Just completed a 30-day yoga challenge! Here's what I learned about consistency and mindfulness...</p>
              <div className="post-image">
                <img src="./src/images/community2.jpg" alt="Yoga Challenge" />
              </div>
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
                  <h3>Vansh Jain</h3>
                  <p className="user-role">Nutrition Expert</p>
                </div>
              </div>
              <div className="post-category">Nutrition Tips</div>
            </div>

            <div className="post-content">
              <p>Quick tip: Start your day with a glass of warm lemon water to boost your metabolism and improve digestion...</p>
              <div className="post-image">
                <img src="./src/images/coommuity3.jpg" alt="Lemon Water" />
              </div>
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
                  <h3>Soham Padalia</h3>
                  <p className="user-role">Wellness Coach</p>
                </div>
              </div>
              <div className="post-category">Community</div>
            </div>

            <div className="post-content">
              <p>Looking for meditation buddies! Join our daily morning meditation sessions starting next week...</p>
              <div className="post-image">
                <img src="./src/images/community4.jpg" alt="Meditation Session" />
              </div>
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
                  <h3>Vatsal Jain</h3>
                  <p className="user-role">Yoga Enthusiast</p>
                </div>
              </div>
              <div className="post-category">Yoga</div>
            </div>

            <div className="post-content">
              <p>Exploring the benefits of daily yoga practice. Join me on this journey!</p>
              <div className="post-image">
                <img src="./src/images/community5.webp" alt="Yoga Practice" />
              </div>
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
                  <h3>Khyati Sharma</h3>
                  <p className="user-role">Fitness Trainer</p>
                </div>
              </div>
              <div className="post-category">Fitness</div>
            </div>

            <div className="post-content">
              <p>Join our community workout sessions every weekend!</p>
              <div className="post-image">
                <img src="./src/images/community6.png" alt="Community Workout" />
              </div>
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
        <footer className="footer">

          <br />
  <p>&copy; 2024 Wellness360 Dashboard. All rights reserved.</p>
  <p>Contact us: <a href="tel:+1234567890">+1 234 567 890</a> | Email: <a href="mailto:support@wellness360.com">support@wellness360.com</a></p>
  <div className="social-links">
    <a href="https://www.facebook.com/wellness360" target="_blank" rel="noopener noreferrer">Facebook</a> | 
    <a href="https://www.twitter.com/wellness360" target="_blank" rel="noopener noreferrer">Twitter</a> | 
    <a href="https://www.instagram.com/wellness360" target="_blank" rel="noopener noreferrer">Instagram</a> | 
    <a href="https://www.linkedin.com/company/wellness360" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
  <p>Privacy Policy | Terms & Conditions</p>
</footer>

      </main>
    </div>
  )
}

export default CommunityPage
