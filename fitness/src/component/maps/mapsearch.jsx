"use client"

import { useState, useEffect } from "react"
import { MapPin, Search, Star } from "lucide-react"
import "./MapSearch.css"
import Sidebar from "../sidebar/sidebar.jsx"

const MapSearch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredStudios, setFilteredStudios] = useState([])
  const [randomFacts, setRandomFacts] = useState([])
  // const [darkMode, setDarkMode] = useState(false)

  const yogaStudios = [
    {
      name: "Peaceful Pose Yoga",
      rating: 4.8,
      location: "Mumbai, India",
      image: " https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Peaceful+Pose+Yoga,Mumbai",
    },
    {
      name: "Serene Soul Yoga",
      rating: 4.7,
      location: "Pune, India",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Serene+Soul+Yoga,Pune",
    },
    {
      name: "Lotus Mind Studio",
      rating: 4.6,
      location: "Delhi, India",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Lotus+Mind+Studio,Delhi",
    },
    {
      name: "Bliss Yoga Hub",
      rating: 4.9,
      location: "Hyderabad, India",
      image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bliss+Yoga+Hub,Hyderabad",
    },
    {
      name: "Eternal Balance Yoga",
      rating: 4.5,
      location: "Bangalore, India",
      image: "https://plus.unsplash.com/premium_photo-1725983645492-38c3dec15c6f?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Eternal+Balance+Yoga,Bangalore",
    },
    {
      name: "Tranquil Asana Center",
      rating: 4.7,
      location: "Chennai, India",
      image: "https://images.unsplash.com/photo-1710611236752-7725e297a681?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Tranquil+Asana+Center,Chennai",
    },
  ]

  const facts = [
    "Yoga increases flexibility by 35% in 8 weeks.",
    "Meditation can reduce stress levels by 40%.",
    "Regular yoga practice improves posture and balance.",
    "Deep breathing exercises can enhance lung capacity.",
    "Power yoga helps burn up to 500 calories per session.",
    "Hot yoga increases metabolism and detoxifies the body.",
    "Practicing yoga can reduce blood pressure naturally.",
    "Yoga can improve sleep quality by 60%.",
    "Stretching in yoga prevents injuries and muscle stiffness.",
    "Daily yoga improves focus and mental clarity.",
  ]

  useEffect(() => {
    const generateFacts = () => {
      const shuffledFacts = facts.sort(() => 0.5 - Math.random())
      setRandomFacts(shuffledFacts.slice(0, 7)) // Showing 7 fitness facts at a time
    }

    generateFacts()
    const interval = setInterval(generateFacts, 7000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredStudios(yogaStudios)
    } else {
      const results = yogaStudios.filter((studio) => studio.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredStudios(results.length > 0 ? results : yogaStudios)
    }
  }, [searchTerm])

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`
      window.open(googleMapsUrl, "_blank")
    }
  }

  return (
    <>
    <Sidebar />
    <div className="map-search-container">
      {/* <div className="top-bar">
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div> */}

      <div className="search-box">
        <div className="title">
          <MapPin size={35} /> <h2 className="large-text">Find the Best Yoga Studios Near You</h2>
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search-input large-input"
            placeholder="Search yoga studios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
          <button
            className="search-button"
            onClick={() =>
              window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`, "_blank")
            }
          >
            <Search size={22} />
          </button>
        </div>
      </div>

      <div className="content">
        <div className="gym-list">
          <h3>Yoga Studios</h3>
          <div className="gym-cards">
            {filteredStudios
              .filter((studio) => studio.rating >= 4.5)
              .sort((a, b) => b.rating - a.rating)
              .map((studio, index) => (
                <div key={index} className="gym-card">
                  <img src={studio.image || "/placeholder.svg"} alt={studio.name} className="gym-image" />
                  <h4>{studio.name}</h4>
                  <p>{studio.location}</p>
                  <div className="rating">
                    <Star size={18} color="gold" /> {studio.rating}
                  </div>
                  <a href={studio.mapUrl} target="_blank" rel="noopener noreferrer" className="map-btn">
                    View on Map
                  </a>
                </div>
              ))}
          </div>
        </div>

        <div className="facts-column">
          <h3>Fitness Facts</h3>
          <ul>
            {randomFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="top-rated">
        <h2>Top Rated Gyms</h2>
        <div className="gym-cards">
          {yogaStudios.map((gym, index) => (
            <div key={index} className="gym-card">
              <img src={gym.image || "/placeholder.svg"} alt={gym.name} className="gym-image" />
              <h4>{gym.name}</h4>
              <p>{gym.location}</p>
              <div className="rating">
                <Star size={18} color="gold" /> {gym.rating}
              </div>
              <a href={gym.mapUrl} target="_blank" rel="noopener noreferrer" className="map-btn">
                View on Map
              </a>
            </div>
          ))}
        </div>
        <footer className="footer">
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

      </div>
    </div>
    </>
  )
}

export default MapSearch
