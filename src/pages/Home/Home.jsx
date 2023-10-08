import Banner from "../../Components/Banner/Banner"
import Services from "../../Components/Services/Services"
import Footer from "../../Components/Footer/Footer"
import RecentEvent from "../../Components/RecentEvent/RecentEvent";
import Team from "../../Components/Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <RecentEvent></RecentEvent>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;