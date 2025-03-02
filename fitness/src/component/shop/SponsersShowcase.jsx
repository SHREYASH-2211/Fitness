import React, { useState } from "react";
import "./SponsersShowcase.css";
import Sidebar from "../sidebar/sidebar.jsx";

function SponsorsShowcase() {
  const [coins, setCoins] = useState(147); // Assuming initial coin count is 147

  const sponsors = [
    {
      id: 1,
      name: "FitBit",
      description:
        "Leading provider of wearable fitness and health-tracking technology, helping users monitor their wellness goals.",
      imageUrl: "https://m.media-amazon.com/images/I/61jUiN1bCrL.jpg",
      websiteUrl: "https://community.fitbit.com/t5/Community/ct-p/EN",
    },
    {
      id: 2,
      name: "Herbalife",
      description:
        "A global nutrition company offering a range of products for weight management, fitness, and overall wellness.",
      imageUrl:
        "https://static.theprint.in/wp-content/uploads/2023/10/ANI-20231004115813.jpg",
      websiteUrl: "https://www.herbalife.com",
    },
    {
      id: 3,
      name: "Muscle Blaze",
      description:
        "India's leading sports nutrition brand, providing high-quality protein supplements for fitness enthusiasts.",
      imageUrl:
        "https://img6.hkrtcdn.com/27834/prd_2783395-MuscleBlaze-Whey-Performance-Protein-4.4-lb-Chocolate_o.jpg",
      websiteUrl: "https://www.muscleblaze.com",
    },
    {
      id: 4,
      name: "GoPro",
      description:
        "A brand known for its action cameras and accessories, empowering people to capture their fitness and adventure journeys.",
      imageUrl:
        "https://mma.prnewswire.com/media/487617/gopro_Logo.jpg?p=twitter",
      websiteUrl: "https://gopro.com/en/us/",
    },
    {
      id: 5,
      name: "Adidas",
      description:
        "A global leader in sportswear and footwear, offering innovative products for fitness, training, and wellness.",
      imageUrl:
        "https://fabrikbrands.com/wp-content/uploads/Adidas-Logo-1-scaled.jpg",
      websiteUrl: "https://www.adidas.com",
    },
    {
      id: 6,
      name: "Activ Health",
      description:
        "A wellness brand that provides nutrition and fitness products designed to enhance overall health and well-being.",
      imageUrl:
        "https://cdn6.aptoide.com/imgs/c/2/7/c27cfb75cea4d43023f4deb5106ffd64_fgraphic.png",
      websiteUrl: "https://www.activhealth.com",
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="sponsors-page">
        {/* Coin Button in Top-Right */}
        <button className="coin-button">
          <span className="coin-icon">💰</span>
          <span className="coin-count">{coins}</span>
        </button>

        {/* Header */}
        <header className="sponsors-header">
          <div className="container">
            <h1>Our Valued Sponsors</h1>
            <p>The prestigious organizations that help make our vision a reality</p>
          </div>
        </header>

        {/* Sponsors Grid */}
        <main className="sponsors-main container">
          <div className="sponsors-grid">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="sponsor-card">
                <div className="sponsor-content">
                  <div className="sponsor-image">
                    <img src={sponsor.imageUrl} alt={`${sponsor.name} logo`} />
                  </div>
                  <h2 className="sponsor-title">{sponsor.name}</h2>
                  <p className="sponsor-description">{sponsor.description}</p>
                  <div className="button-container">
                    <button
                      className="sponsor-button"
                      onClick={() => window.open(sponsor.websiteUrl, "_blank")}
                    >
                      Learn More
                    </button>
                    <a href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <button className="sponsor-button buy-now">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        
          <div className="container">
            <p className="footer-accent">Join Our Prestigious Partners</p>
            <p className="footer-text">
              Interested in becoming a sponsor? Contact us at sponsors@yoursite.com
            </p>
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
    </>
  );
}

export default SponsorsShowcase;
