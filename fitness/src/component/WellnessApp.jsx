import React from "react";
import "./wellnessApp.css";
import { Heart, Activity, Dumbbell, Brain, Apple, Users, Award } from "lucide-react";

export default function WellnessApp() {
  return (
    <div className="container">
      {/* Left side - Features */}
      <div className="feature-section">
        <h1 className="title">Your journey to wellness begins here</h1>
        <FeatureCard icon={<Activity />} title="Health Monitoring" description="Track your heart rate, steps, and more with real-time data." />
        <FeatureCard icon={<Dumbbell />} title="Personalized Workouts" description="Get customized workout plans tailored to your fitness goals." />
        <FeatureCard icon={<Brain />} title="Mindfulness & Meditation" description="Access guided meditation sessions to improve your mental well-being." />
        <FeatureCard icon={<Apple />} title="Nutrition Tracking" description="Log your meals and monitor your daily nutritional intake." />
        <FeatureCard icon={<Users />} title="Community Support" description="Join a community of like-minded individuals for support and motivation." />
        <FeatureCard icon={<Award />} title="Achievements & Rewards" description="Earn badges and rewards for reaching your fitness milestones." />
      </div>
      {/* Right side - Login form */}
      <div className="login-section">
        <div className="login-box">
          <div className="logo">
            <HeartLogo className="heart-logo" />
            <h2 className="login-title">VitalSync</h2>
            <p className="login-subtitle">Your journey to wellness begins here</p>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Feature card component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Custom heart logo component
function HeartLogo({ className }) {
  return (
    <div className={className}>
      <Heart />
    </div>
  );
}