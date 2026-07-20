export default function Footer() {
    return (
        <footer className="footer">
    <div className="footer-container">

        {/* <!-- Company --> */}
        <div className="footer-box">
            <h3>FreshMart</h3>
            <p>
                Fresh groceries delivered to your doorstep with quality,
                affordability, and convenience.
            </p>

            <div className="social-icons">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>

        {/* <!-- Quick Links --> */}
        <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        {/* <!-- Customer Support --> */}
        <div className="footer-box">
            <h3>Customer Support</h3>
            <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

        {/* <!-- Contact --> */}
        <div className="footer-box">
            <h3>Contact Us</h3>
            <p><i className="fa-solid fa-location-dot"></i> Bangalore, India</p>
            <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>
            <p><i className="fa-solid fa-envelope"></i> support@freshmart.com</p>
        </div>

    </div>

    <div className="footer-bottom">
        <p>&copy; 2026 FreshMart. All Rights Reserved.</p>
    </div>
</footer>
    )
}
