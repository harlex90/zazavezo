import Navbar from "./Navbar";
import Footer from "./Footer";
import beloboatOP from "../assets/beloboatOP.jpg";

const Content = () => {
    return(
        <div className="flex flex-col items-center grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)]" style={{backgroundImage: `url(${beloboatOP})`}}>
            <div className="m-[50px]">
                <h3>Vous pouvez devenir adhérent(e) ou faire un don en ligne via la plateforme HelloAsso:</h3>
            </div>
            <div>
                <h1>Devenir adhérent(e):</h1>
            </div>
            <div>
                <h1>Contribuer:</h1>
            </div>
        </div>
    )
}

const Contribuer = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Contribuer;