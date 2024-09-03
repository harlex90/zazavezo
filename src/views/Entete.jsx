import beloboatTry2 from "../assets/beloboatTry2.jpg";
import assochildren from "../assets/assochildren.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const TitleAndCaption = () => {
    return(
        <div className="flex flex-row justify-between flex-grow gap-4 flex-wrap mx-4 lg:mx-0">
            <div className="flex flex-col">
                <div>
                    <h1 className="flex flex-col md:flex-row gap-2 md:gap-0 items-center pb-4" style={{fontSize: "6rem", fontWeight:"normal", opacity: "0.9", lineHeight: '4.5rem', }}>
                        <span style={{color: "red"}}>ZAZA</span>
                        <span style={{color: "green"}}>VEZO</span>
                    </h1>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "30px", color: "#01021A"}}>
                    <h3 style={{padding: 0, margin: 0, fontWeight:"bold"}}>Bienvenue sur le site de notre association !</h3>
                    <h4 style={{padding: 0, margin: 0, fontWeight:"normal"}}>L'association Zazavezo oeuvre en faveur des enfants de l'île de Belo-sur-Mer, à Madagascar.</h4>
                </div>
            </div>
            <div className="flex items-center flex-grow justify-center lg:flex-grow-0">
                <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-4 border border-blue-700 rounded gap-4 items-center">
                    <div className="border border-white border solid border-2 px-4 py-0.5 rounded-full text-[30px]">
                        €
                    </div>
                    <div className="text-[20px] whitespace-nowrap">
                        <Link to="/contribuer">
                            Faire un don
                        </Link>
                    </div>
                </button>
            </div>
        </div>
    )
}


const Homepage = () => {
    return(
        <div className="flex flex-1 bg-no-repeat bg-right-top bg-[#EADDDD]" style={{backgroundImage: `url(${beloboatTry2})`}}> 
            <div 
                className="flex flex-col lg:flex-row items-center w-full lg:items-end gap-[20px] lg:gap-[60px] xl:gap-[110px] lg:mx-[55px] lg:mb-[30px] pb-4">
                <img
                    src={assochildren}
                    alt={"Belo picture"}
                    className="my-8"
                    style={{ width: "400px", height: "auto", border: '1px solid #E9D2D2'}}
                />
                <TitleAndCaption/>
            </div>
        </div>
        
    )
}


const Entete = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Homepage/>
            <Footer/>
        </div>
    )
}


export default Entete;