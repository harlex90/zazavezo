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
                <h1>DEVENIR ADHÉRENT(E):</h1>
            </div>
            <div className="m-[80px]">
                <button className="flex border border-green-700 rounded gap-4 items-center">
                    <div className="flex bg-green-500 hover:bg-green-700 text-white font-bold px-8 py-4">
                        Adhérer
                    </div> 
                </button>
            </div>
            <div>
                <h1>CONTRIBUER:</h1>
            </div>
            <div className="m-[80px]">
                <button className="flex border border-green-700 rounded gap-4 items-center">
                    <div className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-4">
                        Contribuer
                    </div> 
                </button>
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