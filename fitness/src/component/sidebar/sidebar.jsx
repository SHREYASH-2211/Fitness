import "../sidebar/sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon"></div>
        <h1 className="logo-text">
          {/* <span><img className="logo-icon" src="./src/images/logo.jpeg"  /></span> */}
          <span>Wellness360</span></h1>
      </div>

      <nav className="sidebar-nav">
        <Link to="/" className="nav-item">
          <span className="nav-icon home-icon"></span>
          <span className="nav-text">Home</span>
        </Link>

        <Link to="/ai" className="nav-item">
        <span className="nav-icon disease-icon"></span> {/* Update class name */}
        <span className="nav-text">Ai </span>
        </Link>

        <Link
        to="#"
        className="nav-item-yoga"
        onClick={(e) => {
        e.preventDefault(); // Prevent default behavior
        window.location.href = "https://hwffvj.csb.app/"; // Redirect in same tab
        }}
        >
         <span className="nav-icon yoga-icon"></span>
         <span className="nav-text">Yoga & Gym</span>
        </Link>

        <Link to="/community" className="nav-item">
          <span className="nav-icon community-icon"></span>
          <span className="nav-text">Community</span>
        </Link>

        <Link to="/diet-planner" className="nav-item">
          <span className="nav-icon diet-icon"></span>
          <span className="nav-text">Diet Planner</span>
        </Link>

        <Link to="/maps" className="nav-item">
          <span className="nav-icon maps-icon"></span>
          <span className="nav-text">Maps</span>
        </Link>

        <Link to="/shops" className="nav-item">
          <span className="nav-icon classes-icon"></span>
          <span className="nav-text">Shops</span>
        </Link>
      </nav>

      {/* <div className="help-widget">
        <h3>Need Help?</h3>
        <p>Our AI assistant is here 24/7 to help you achieve your wellness goals.</p>
        <button className="chat-button">Chat with AI</button>
      </div> */}
    </aside>
  )
}

export default Sidebar

