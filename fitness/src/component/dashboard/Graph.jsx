import React from "react";
import "./Graph.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./dashboard.css";

const stepsData = [
  { day: "Mon", steps: 6000 },
  { day: "Tue", steps: 7500 },
  { day: "Wed", steps: 8200 },
  { day: "Thu", steps: 10000 },
  { day: "Fri", steps: 8900 },
  { day: "Sat", steps: 7200 },
  { day: "Sun", steps: 9400 },
];

const caloriesData = [
  { day: "Mon", burned: 400, consumed: 500 },
  { day: "Tue", burned: 550, consumed: 600 },
  { day: "Wed", burned: 700, consumed: 650 },
  { day: "Thu", burned: 800, consumed: 700 },
  { day: "Fri", burned: 750, consumed: 720 },
  { day: "Sat", burned: 600, consumed: 680 },
  { day: "Sun", burned: 900, consumed: 750 },
];

const activityData = [
  { time: "6 AM", duration: 30 },
  { time: "9 AM", duration: 50 },
  { time: "12 PM", duration: 40 },
  { time: "3 PM", duration: 60 },
  { time: "6 PM", duration: 80 },
  { time: "9 PM", duration: 30 },
];

const Graphs = () => {
  return (
    <div className="graphs-container">
      {/* Steps Line Chart */}
      <div className="graph-box">
        <h2>Steps Overview</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={stepsData}>
            <XAxis dataKey="day" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <CartesianGrid stroke="#444" />
            <Line type="monotone" dataKey="steps" stroke="limegreen" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Calories Burned vs. Consumed */}
      <div className="graph-box">
        <h2>Calories Burned vs. Consumed</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={caloriesData}>
            <XAxis dataKey="day" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <CartesianGrid stroke="#444" />
            <Line type="monotone" dataKey="burned" stroke="orange" strokeWidth={2} />
            <Line type="monotone" dataKey="consumed" stroke="blue" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Activity Time Chart */}
      <div className="graph-box">
        <h2>Activity Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={activityData}>
            <XAxis dataKey="time" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <CartesianGrid stroke="#444" />
            <Line type="monotone" dataKey="duration" stroke="cyan" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graphs;