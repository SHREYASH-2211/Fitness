import { Routes, Route } from "react-router-dom"
import CommunityPage from "./component/community/community.jsx"
import Dashboard from "./component/dashboard/dashboard.jsx"
import Meditation from "./component/meditation/meditation.jsx"
import Classes from "./component/classes/find-classes.jsx"
import Planner from "./component/planner/diet-planner.jsx"
import LoginPage from "./component/login/login-page.jsx"
import Loginf from "./component/LoginForm/Loginf.jsx"
import Map from "./component/maps/mapsearch.jsx"
import Chatbox from "./component/ai/Ai1.jsx"
import SponsorsShowcase from "./component/shop/SponsersShowcase.jsx"

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/login" element={<Loginf />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/find-classes" element={<Classes />} />
        <Route path="/diet-planner" element={<Planner />} />
        <Route path="/maps" element={<Map />} />
        <Route path="/ai" element={<Chatbox />} /> {/* Add the new AI route */}
        <Route path="/shops" element={<SponsorsShowcase />} />
      </Routes>
    </div>
  )
}

export default App

