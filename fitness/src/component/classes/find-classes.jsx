import "./find-classes.css"
import Sidebar from "../sidebar/sidebar.jsx"

const FindClassesPage = () => {
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

        <div className="classes-container">
          <div className="class-cards">
            <div className="class-card">
              <div className="class-image yoga-image"></div>
              <div className="class-details">
                <div className="class-header">
                  <h3>Zen Yoga Studio</h3>
                  <div className="rating">⭐ 4.8 (124)</div>
                </div>
                <div className="class-category">Yoga</div>
                <div className="class-info">
                  <span>💲 25/class</span>
                  <span>👥 Limited spots</span>
                </div>
                <div className="class-times">
                  <div className="time-slot">
                    <span>⏰ 7:00 AM</span>
                    <span className="spots">5 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                  <div className="time-slot">
                    <span>⏰ 9:00 AM</span>
                    <span className="spots">3 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                  <div className="time-slot">
                    <span>⏰ 5:30 PM</span>
                    <span className="spots">8 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                </div>
                <button className="view-schedule">View Schedule</button>
              </div>
            </div>

            <div className="class-card">
              <div className="class-image gym-image"></div>
              <div className="class-details">
                <div className="class-header">
                  <h3>PowerFit Gym</h3>
                  <div className="rating">⭐ 4.6 (89)</div>
                </div>
                <div className="class-category">Fitness</div>
                <div className="class-info">
                  <span>💲 30/class</span>
                  <span>👥 Limited spots</span>
                </div>
                <div className="class-times">
                  <div className="time-slot">
                    <span>⏰ 6:00 AM</span>
                    <span className="spots">4 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                  <div className="time-slot">
                    <span>⏰ 12:00 PM</span>
                    <span className="spots">6 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                  <div className="time-slot">
                    <span>⏰ 6:30 PM</span>
                    <span className="spots">2 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                </div>
                <button className="view-schedule">View Schedule</button>
              </div>
            </div>

            <div className="class-card">
              <div className="class-image meditation-image"></div>
              <div className="class-details">
                <div className="class-header">
                  <h3>MindBody Center</h3>
                  <div className="rating">⭐ 4.9 (97)</div>
                </div>
                <div className="class-category">Meditation</div>
                <div className="class-info">
                  <span>💲 20/class</span>
                  <span>👥 Limited spots</span>
                </div>
                <div className="class-times">
                  <div className="time-slot">
                    <span>⏰ 8:00 AM</span>
                    <span className="spots">10 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                  <div className="time-slot">
                    <span>⏰ 2:00 PM</span>
                    <span className="spots">7 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                  <div className="time-slot">
                    <span>⏰ 7:00 PM</span>
                    <span className="spots">5 spots</span>
                    <button className="book-button">Book</button>
                  </div>
                </div>
                <button className="view-schedule">View Schedule</button>
              </div>
            </div>
          </div>

          <div className="category-cards">
            <div className="category-card">
              <h3>Yoga Studios</h3>
              <div className="category-count">12</div>
              <div className="category-location">Near you</div>
            </div>
            <div className="category-card">
              <h3>Fitness Centers</h3>
              <div className="category-count">8</div>
              <div className="category-location">Near you</div>
            </div>
            <div className="category-card">
              <h3>Meditation Spaces</h3>
              <div className="category-count">5</div>
              <div className="category-location">Near you</div>
            </div>
            <div className="category-card">
              <h3>Wellness Centers</h3>
              <div className="category-count">7</div>
              <div className="category-location">Near you</div>
            </div>
          </div>

          <div className="map-container">
            <h3>Class Locations</h3>
            <div className="map">
              <div className="map-controls">
                <button className="map-zoom">+</button>
                <button className="map-zoom">-</button>
              </div>
              <div className="map-locations">
                <div className="map-location">
                  <span className="location-dot"></span>
                  <span>Zen Yoga Studio</span>
                  <span className="location-address">Colaba, Mumbai</span>
                </div>
                <div className="map-location">
                  <span className="location-dot"></span>
                  <span>PowerFit Gym</span>
                  <span className="location-address">Worli, Mumbai</span>
                </div>
                <div className="map-location">
                  <span className="location-dot"></span>
                  <span>MindBody Center</span>
                  <span className="location-address">Bandra West, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="help-section">
          <h3>Need Help?</h3>
          <p>Our AI assistant is here 24/7 to help you achieve your wellness goals.</p>
          <button className="chat-button">Chat with AI</button>
        </div>
      </main>

      
    </div>
  )
}

export default FindClassesPage

