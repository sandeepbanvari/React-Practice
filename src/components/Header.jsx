import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="header">

            <div className="logo">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>FreshMart</span>
            </div>

            <nav className="navbar">
                <Link to='/'>Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div className="header-right">

                <div className="search-box">
                    <input type="text" placeholder="Search products..." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>

                <button className="login-btn">Login</button>

            </div>

        </header>
    )
}
