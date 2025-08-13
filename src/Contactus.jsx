import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
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
    };

    return (
        <div className="contact-container-modal">
            <div className="contact-card-modal">
                <div className="contact-form-section">
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

                <div className="contact-info-section">
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="icon phone-icon"></div>
                            <div className="info-content">
                                <h3>Phone Number</h3>
                                <p>+27-81-593-6882</p>
                                <p>+27-78-523-6712</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon email-icon"></div>
                            <div className="info-content">
                                <h3>Email Address</h3>
                                <p>B.katundu@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon location-icon"></div>
                            <div className="info-content">
                                <h3>Our Website</h3>
                                <p>vipprodelivery.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;