import Navbar from "./Navbar";
import Footer from "./Footer";
import beloboat from "../assets/beloboat.jpg";

const Content = () => {
    return(
        <div style={{flexGrow: 1, backgroundImage: `url(${beloboat})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "40% 70%", opacity: "0.5"}}>
            <h3>Vous pouvez devenir adhérent(e) ou contribuer en faisant un don en ligne via la plateforme HelloAsso:</h3>
            <h1>Devenir adhérent(e):</h1>
            <h1>Contribuer:</h1>
        </div>
    )
}

const Contribuer = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Contribuer;