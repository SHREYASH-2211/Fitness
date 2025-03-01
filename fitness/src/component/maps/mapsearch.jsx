"use client"

import { useState, useEffect } from "react"
import { MapPin, Search, Star } from "lucide-react"
import "./MapSearch.css"
import Sidebar from "../sidebar/sidebar.jsx"

const MapSearch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredStudios, setFilteredStudios] = useState([])
  const [randomFacts, setRandomFacts] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const yogaStudios = [
    {
      name: "Peaceful Pose Yoga",
      rating: 4.8,
      location: "Mumbai, India",
      image: " ./src/images/1111-40.png",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Peaceful+Pose+Yoga,Mumbai",
    },
    {
      name: "Serene Soul Yoga",
      rating: 4.7,
      location: "Pune, India",
      image: "./src/images/203814WhatsApp Image 2023-04-11 at 4.01.34 PM (5).jpeg",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Serene+Soul+Yoga,Pune",
    },
    {
      name: "Lotus Mind Studio",
      rating: 4.6,
      location: "Delhi, India",
      image: "./src/images/download (1).jpeg",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Lotus+Mind+Studio,Delhi",
    },
    {
      name: "Bliss Yoga Hub",
      rating: 4.9,
      location: "Hyderabad, India",
      image: "./src/images/download.jpeg",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bliss+Yoga+Hub,Hyderabad",
    },
    {
      name: "Eternal Balance Yoga",
      rating: 4.5,
      location: "Bangalore, India",
      image: "./src/images/1685356430.jpg",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Eternal+Balance+Yoga,Bangalore",
    },
    {
      name: "Tranquil Asana Center",
      rating: 4.7,
      location: "Chennai, India",
      image: "./src/images/1686131601.jpg",
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
    <div className={`map-search-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="top-bar">
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

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
      </div>
    </div>
    </>
  )
}

export default MapSearch
