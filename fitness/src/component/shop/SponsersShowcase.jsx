import React from "react";
import "./SponsersShowcase.css";
import Sidebar from "../sidebar/sidebar.jsx"

function SponsorsShowcase() {
  // Sample sponsor data - you would replace this with your actual sponsors
  const sponsors = [
    {
      id: 1,
      name: "FitBit",
      description:
        "Leading provider of wearable fitness and health-tracking technology, helping users monitor their wellness goals.",
      imageUrl: "https://m.media-amazon.com/images/I/61jUiN1bCrL.jpg",
    },
    {
      id: 2,
      name: "Herbalife",
      description:
        "A global nutrition company offering a range of products for weight management, fitness, and overall wellness.",
      imageUrl:
        "https://static.theprint.in/wp-content/uploads/2023/10/ANI-20231004115813.jpg",
    },
    {
      id: 3,
      name: "Muscle Blaze",
      description:
        "India's leading sports nutrition brand, providing high-quality protein supplements for fitness enthusiasts.",
      imageUrl:
        "https://img6.hkrtcdn.com/27834/prd_2783395-MuscleBlaze-Whey-Performance-Protein-4.4-lb-Chocolate_o.jpg",
    },
    {
      id: 4,
      name: "GoPro",
      description:
        "A brand known for its action cameras and accessories, empowering people to capture their fitness and adventure journeys.",
      imageUrl:
        "https://mma.prnewswire.com/media/487617/gopro_Logo.jpg?p=twitter",
    },
    {
      id: 5,
      name: "Adidas",

      description:
        "A global leader in sportswear and footwear, offering innovative products for fitness, training, and wellness.",
      imageUrl:
        "https://fabrikbrands.com/wp-content/uploads/Adidas-Logo-1-scaled.jpg",
    },
    {
      id: 6,
      name: "Activ Health",
      description:
        "A wellness brand that provides nutrition and fitness products designed to enhance overall health and well-being.",
      imageUrl:
        "https://cdn6.aptoide.com/imgs/c/2/7/c27cfb75cea4d43023f4deb5106ffd64_fgraphic.png",
    },
  ];

  return (
    <>
    <Sidebar/>
    <div className="sponsors-page">
      {/* Header */}
      <header className="sponsors-header">
        <div className="container">
          <h1>Our Valued Sponsors</h1>
          <p>
            The prestigious organizations that help make our vision a reality
          </p>
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
                <button className="sponsor-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="sponsors-footer">
        <div className="container">
          <p className="footer-accent">Join Our Prestigious Partners</p>
          <p className="footer-text">
            Interested in becoming a sponsor? Contact us at
            sponsors@yoursite.com
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default SponsorsShowcase;
