import Footer from "../src/components/Footer"
import { Header } from "../src/components/Header"

export const About = () => {
    return (
        <>
            <Header />
            <section className="about">

                <div className="about-container">

                    {/* <!-- Left Side --> */}
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e" alt="Fresh Grocery" />
                    </div>

                    {/* <!-- Right Side --> */}
                    <div className="about-content">

                        <span>About Us</span>

                        <h2>Fresh Food, Healthy Life</h2>

                        <p>
                            Welcome to <strong>FreshMart</strong>, your trusted online grocery store.
                            We deliver fresh fruits, vegetables, dairy products, bakery items,
                            and daily essentials directly to your doorstep.
                        </p>

                        <p>
                            Our mission is to make grocery shopping simple, affordable,
                            and convenient while ensuring the highest quality products
                            sourced directly from local farmers and trusted suppliers.
                        </p>

                        <div className="about-features">

                            <div className="feature">
                                <i className="fa-solid fa-leaf"></i>
                                <h4>100% Fresh</h4>
                                <p>Farm fresh and quality products.</p>
                            </div>

                            <div className="feature">
                                <i className="fa-solid fa-truck-fast"></i>
                                <h4>Fast Delivery</h4>
                                <p>Quick and safe doorstep delivery.</p>
                            </div>

                            <div className="feature">
                                <i className="fa-solid fa-shield-halved"></i>
                                <h4>Secure Payment</h4>
                                <p>100% safe and secure checkout.</p>
                            </div>

                        </div>

                        <button className="about-btn">Learn More</button>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    )
}

export default About;