import { Link } from "react-router-dom"

export const Signin = () => {
    return (
        <section className="signin">

            <div className="signin-container">

                {/* <!-- Left Side --> */}

                <div className="signin-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        Sign in to continue shopping fresh groceries, manage your
                        orders, and enjoy exclusive deals every day.
                    </p>
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                        alt="FreshMart" />

                </div>

                {/* <!-- Right Side --> */}

                <div className="signin-right">

                    <h2>Sign In</h2>

                    <form>
                        <div className="input-box">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email Address"
                                required />
                        </div>
                        <div className="input-box">
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                required />
                        </div>
                        <div className="remember">
                            <label>
                                <input type="checkbox"/>
                                    Remember Me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit" className="signin-btn">
                            Sign In
                        </button>

                        <div className="divider">
                            <span>OR</span>
                        </div>

                        <div className="social-login">

                            <a href="#">
                                <i className="fa-brands fa-google"></i>
                            </a>

                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="#">
                                <i className="fa-brands fa-apple"></i>
                            </a>

                        </div>

                        <p className="signup-text">
                            Don't have an account?
                            <Link to='/signup'>Create Account</Link>
                        </p>

                    </form>

                </div>

            </div>

        </section>
    )
}