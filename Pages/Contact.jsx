import Footer from "../src/components/Footer";
import { Header } from "../src/components/Header";

export const Contact = () => {
    return (
        <>
        <Header/>
            <section className="contact">

                <div className="contact-heading">
                    <span>Get In Touch</span>
                    <h2>Contact FreshMart</h2>
                    <p>We're here to help! Reach out to us for any questions or support.</p>
                </div>

                <div className="contact-container">

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>

                        <div className="info-box">
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h4>Address</h4>
                                <p>123 MG Road, Bangalore, Karnataka, India</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p>support@freshmart.com</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <i className="fa-solid fa-clock"></i>
                            <div>
                                <h4>Working Hours</h4>
                                <p>Monday - Sunday<br />8:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form>
                            {/* FIXED: Elements are now properly flat and self-closed */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                required
                            />

                            <textarea
                                rows="6"
                                placeholder="Write Your Message..."
                                required
                            ></textarea>

                            <button type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

                {/* Google Map */}
                <div className="map">
                    {/* FIXED: Changed allowfullscreen to camelCase allowFullScreen */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18..."
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>

            </section>

            <Footer/>
        </>
    );
};
