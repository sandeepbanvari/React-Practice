import { Carousel } from "../src/components/Carousel"
import Footer from "../src/components/Footer"
import { Header } from "../src/components/Header"
import Map from "../src/components/Utilities/Map"

export const Home = () => {
    return(
        <>
        <Header/>
        <Carousel/>
        <Map/>
        <Footer/>
        </>
    )
}