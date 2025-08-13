import React, { useState } from "react";
import "./App.css";
import Discover_Cape_Town from "./assets/Discover_Cape_Town.png";
import Footer from "./components/Footer"; 

import { FaUmbrellaBeach, FaSafari, FaShip, FaTree, FaWineGlassAlt, FaStar } from "react-icons/fa";

const categories = [
    { name: "Beach Experience", icon: <FaUmbrellaBeach size={50} color="blue" /> },
    { name: "African Safari", icon: <FaSafari size={50} color="blue" /> },
    { name: "Boat Cruises", icon: <FaShip size={50} color="blue" /> },
    { name: "Nature Experience", icon: <FaTree size={50} color="blue" /> },
    { name: "Wineland Tours", icon: <FaWineGlassAlt size={50} color="blue" /> }
];

const destinations = [
    { name: 'Cape Town', image: 'src/assets/cape town.jpg' },
    { name: 'Sea Point', image: 'src/assets/cape town sea.jpg' },
    { name: 'Bo-Kab', image: 'src/assets/houses.jpg' },
    { name: 'Table Mountain', image: 'src/assets/table mountain at night .jpg' },
    { name: 'Kirstenbosch', image: 'src/assets/kirstenbosch.png' },
    { name: 'Cape Town Redish', image: 'src/assets/capetown redish.jpg' },
];

const tourOptions = [
    {
        title: "Bokab",
        price: "ZAR 2,300.00",
        rating: 5,
        reviews: 10,
        image: "src/assets/houses.jpg"
    },
    {
        title: "Kirstenbosch botanical garden",
        price: "ZAR 2,099.00",
        rating: 5,
        reviews: 11,
        image: "src/assets/kirstenbosch.png"
    },
    {
        title: "Sea point",
        price: "ZAR 1,980.00",
        rating: 5,
        reviews: 22,
        image: "src/assets/cape town sea.jpg"
    },
    {
        title: "Table Mountain Safari Tour",
        price: "ZAR 1,500.00",
        rating: 5,
        reviews: 18,
        image: "src/assets/table mountain at night .jpg"
    },
    {
        title: "Cape Town City Tour",
        price: "ZAR 1,200.00",
        rating: 5,
        reviews: 15,
        image: "src/assets/cape town.jpg"
    },
    {
        title: "Sunset Cruise Experience",
        price: "ZAR 850.00",
        rating: 5,
        reviews: 13,
        image: "src/assets/capetown redish.jpg"
    }
];

const App = () => {
    const [showTourModal, setShowTourModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const toggleTourModal = (e) => {
        e.preventDefault();
        setShowTourModal(!showTourModal);
    };

    const toggleContactModal = (e) => {
        e.preventDefault();
        setShowContactModal(!showContactModal);
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        toggleContactModal(e);
    };


    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <img src="src/assets/logo.jpg" alt="Logo" className="logo"/>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a onClick={toggleTourModal}>Tours</a>
                    <a onClick={toggleContactModal}>Contact us</a>
                </div>
            </nav>

            {/* Tours Modal */}
            {showTourModal && (
                <div className="tour-modal-overlay" onClick={toggleTourModal}>
                    <div className="tour-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Your tour with VIP PRO DELIVERY</h2>
                            <button className="close-button" onClick={toggleTourModal}>×</button>
                        </div>

                        <div className="banner-image">
                            <img src="src/assets/cap.jpg" alt="African safari"/>
                        </div>

                        <div className="tour-options">
                            {tourOptions.map((tour, index) => (
                                <div className="tour-card" key={index}>
                                    <img src={tour.image} alt={tour.title}/>
                                    <h3>{tour.title}</h3>
                                    <div className="tour-rating">
                                        {[...Array(tour.rating)].map((_, i) => (
                                            <FaStar key={i} color="#00aa6c"/>
                                        ))}
                                        <span className="review-count"> ({tour.reviews})</span>
                                    </div>
                                    <div className="tour-price">From {tour.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Us Modal */}
            {showContactModal && (
                <div className="tour-modal-overlay" onClick={toggleContactModal}>
                    <div className="tour-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 class="contact-heading">Contact Us</h2>
                            <button className="close-button" onClick={toggleContactModal}>×</button>
                        </div>

                        <div className="contact-form-container">
                            <div className="contact-form-section">
                                <h3 class = "sub-heading">Get In Touch</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Type here..."
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="submit-btn">Send Now</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <img src={Discover_Cape_Town} alt="Cape Town"/>
                    <br/>
                </div>
                <div className="booking-section">
                    <div className="booking-info">
                        <div>
                            Location: <input type="text" placeholder="Enter location" className="input-field"/>
                        </div>
                        <div>
                            Date: <input type="date" className="input-field"/>
                        </div>
                        <div>
                            Guests: <input type="number" min="1" className="input-field"/>
                        </div>
                        <button className="btn">Book Now</button>
                    </div>
                </div>
            </div>


            {/* Tour Categories */}
            <div className="categories">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Tour Categories</h2>
                <div className="category-row">
                    {categories.map((category, index) => (
                        <div className="category-card" key={index}>
                            {category.icon}
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">


                <h2 className="title">Top Destinations</h2>
                <p className="description">
                    VIP PRO Delivery, headquartered in Cape Town, South Africa, offers bespoke, high-end logistics
                    services across Southern Africa.
                    Let us manage your logistics so you can focus on what matters most.
                </p>
                <div className="destination-grid">
                    {destinations.map((dest, index) => (
                        <div key={index} className="destination-card">
                            <img src={dest.image} alt={dest.title} className="destination-image"/>
                            <div className="overlay">
                                <h3 className="destination-title">{dest.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
  <div className="footer-content">
    {/* Left Section - Services */}
    <div className="footer-left">
      <h2 className="footer-title">All Roads Lead To Africa</h2>
      <div className="footer-line"></div>
      <ul className="footer-list">
        <li>Tourism / Tours</li>
        <li>Airports and Transfers</li>
        <li>Charters / Business Trips</li>
        <li>Short and Long Routes</li>
      </ul>
    </div>

    {/* Right Section - Contact Info */}
    <div className="footer-right">
      <p>📞 <a href="tel:+27815936882">+27-81-593-6882</a></p>
      <p>📞 <a href="tel:+27785236712">+27-78-523-6712</a></p>
      <p>📧 <a href="mailto:B.katundu@gmail.com">B.katundu@gmail.com</a></p>
      <p>🌍 <a href="https://vipprodelivery.com" target="_blank" rel="noopener noreferrer">vipprodelivery.com</a></p>
      
      {/* Social Media Icons */}
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
        <a href="https://wa.me/27815936882" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>

  <div className="footer-text">
    © 2025 All Roads Lead To Africa. All rights reserved.
  </div>
</footer>


        </div>
    );
};

export default App;