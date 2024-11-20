import BannerHome from "../components/BannerHome"
import BrandsBanner from "../components/BrandsBanner"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ValuesBlocks from "../components/ValuesBlocks"

const HomePage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <BannerHome />
            <BrandsBanner />
            <ValuesBlocks />
            <Footer />
        </>
    )
}

export default HomePage