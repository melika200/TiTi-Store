import Footer from '../../Components/Footer/Footer'
import IntroInfo from '../../Components/Intro/IntriInfo'
import NavbarItem from '../../Components/navbarItem/NavbarItem'
import Slider from '../../Components/Slider/Slider'
import './Home.css'
export default function Home(){
    return(
        <>
        <div className="test">
            <NavbarItem/>
        </div>
        <div className="container">
            <Slider/>
            <IntroInfo/>
        </div>
        <div className="test">
            <Footer/>
        </div>
        </>
    )
}