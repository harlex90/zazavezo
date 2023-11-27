import Navbar from "./Navbar";
import Footer from "./Footer";
import beloboat from "../assets/beloboat.jpg";

const Content = () => {
    return(
        <div className="grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)] opacity-50" style={{backgroundImage: `url(${beloboat})`}}>
            <h3>Vous pouvez devenir adhérent(e) ou contribuer en faisant un don en ligne via la plateforme HelloAsso:</h3>
            <h1>Devenir adhérent(e):</h1>
            <h1>Contribuer:</h1>
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