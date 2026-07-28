import { Product } from "../../pages/Product";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Signin } from "../../pages/Signin";
import { Signup } from "../../pages/Signup";
import { Users } from "../../pages/Users";

export const AppRoutes = () => {

    const routerData = [
        { path: '/', element: <Home />, },
        { path: '/products', element: <Product />, },
        { path: '/about', element: <About />, },
        { path: '/contact', element: <Contact />, },
        { path: '/signin', element: <Signin />, },
        { path: '/signup', element: <Signup />, },
        { path: '/users', element: <Users />, },
    ]


    return (
        <Routes>

            {
                routerData.map((x) => (
                    <Route
                        path={x.path}
                        element={x.element}
                    />
                ))
            }

        </Routes>


        // <Routes>
        //     <Route path='/' element={<Home />} />
        //     <Route path='/products' element={<Product />} />
        //     <Route path='/about' element={<About />} />
        //     <Route path='/contact' element={<Contact />} />
        // </Routes>
    )
}