import Banner from "../../Components/Banner/Banner"
import Services from "../../Components/Services/Services"
import Footer from "../../Components/Footer/Footer"
import RecentEvent from "../../Components/RecentEvent/RecentEvent";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <RecentEvent></RecentEvent>
            <Footer></Footer>
        </div>
    );
};

export default Home;