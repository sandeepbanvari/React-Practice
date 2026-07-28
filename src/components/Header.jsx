import { Link, NavLink } from "react-router-dom"

export const Header = () => {

    const navLinks = [
        { path: "/", name: "Home", },
        { path: "/products", name: "Products", },
        { path: "/about", name: "About", },
        { path: "/contact", name: "Contact", },
        { path: "/users", name: "Users", },
    ]


    return (
        <header className="header">

            <div className="logo">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>FreshMart</span>
            </div>

            <nav className="navbar">
                {
                    navLinks.map((link) => (
                        <NavLink key={link.path} to={link.path}>
                            {link.name}
                        </NavLink>
                    ))
                }
                {/* <Link to='/'>Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> */}
            </nav>

            <div className="header-right">

                <div className="search-box">
                    <input type="text" placeholder="Search products..." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>

                <div className="user-menu">
                        <i className="fa-solid fa-user"></i>

                    <div className="user-dropdown">
                        <Link to="/signin">Sign In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>

        </header>
    )
}
