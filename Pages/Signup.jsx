import { Link } from "react-router-dom"

export const Signup = () => {
    return (
        <>
            <section class="signup">

                <div class="signup-container">

                    {/* <!-- Left Side --> */}

                    <div class="signup-left">

                        <h1>Join FreshMart</h1>

                        <p>
                            Create your account to enjoy fresh groceries, fast delivery,
                            exclusive discounts, and a seamless shopping experience.
                        </p>

                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
                            alt="FreshMart" />

                    </div>

                    {/* <!-- Right Side --> */}

                    <div class="signup-right">

                        <h2>Create Account</h2>

                        <form>

                            <div class="input-box">
                                <i class="fa-solid fa-user"></i>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required />
                            </div>

                            <div class="input-box">
                                <i class="fa-solid fa-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required />
                            </div>

                            <div class="input-box">
                                <i class="fa-solid fa-phone"></i>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    required />
                            </div>

                            <div class="input-box">
                                <i class="fa-solid fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Create Password"
                                    required />
                            </div>

                            <div class="input-box">
                                <i class="fa-solid fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    required />
                            </div>

                            <div class="terms">

                                <label>
                                    <input type="checkbox" required />
                                        I agree to the Terms & Conditions
                                </label>

                            </div>

                            <button type="submit" class="signup-btn">
                                Create Account
                            </button>

                            <div class="divider">
                                <span>OR</span>
                            </div>

                            <div class="social-login">

                                <a href="#">
                                    <i class="fa-brands fa-google"></i>
                                </a>

                                <a href="#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>

                                <a href="#">
                                    <i class="fa-brands fa-apple"></i>
                                </a>

                            </div>

                            <p class="signin-link">
                                Already have an account?
                                <Link to='/signin'>Sign In</Link>
                            </p>

                        </form>

                    </div>

                </div>

            </section>
        </>
    )
}