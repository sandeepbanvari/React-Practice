export const Header = () => {
    return (
        <header className="header">

            <div className="logo">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>FreshMart</span>
            </div>

            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Categories</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
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
