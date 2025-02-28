import { Routes, Route } from "react-router-dom";
// import Sidebar from "./component/sidebar/sidebar.jsx";
import CommunityPage from "./component/community/community.jsx";
import Dashboard from "./component/dashboard/dashboard.jsx";
import Meditation from "./component/meditation/meditation.jsx";
import Classes from "./component/classes/find-classes.jsx";
import Planner from "./component/planner/diet-planner.jsx";
// Import other page components

function App() {
  return (
    <div className="app-container">
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/find-classes" element={<Classes />} />
        <Route path="/diet-planner" element={<Planner />} />
      </Routes>
    </div>
  );
}

export default App;
