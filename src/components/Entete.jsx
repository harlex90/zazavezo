import beloboatTry2 from "../assets/beloboatTry2.jpg";
import assochildren from "../assets/assochildren.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";


const TitleAndCaption = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
            <div>
                <span style={{fontSize: "6rem", fontWeight:"normal", opacity: "0.9"}}>
                    <span style={{color: "red"}}>ZAZA</span>
                    <span style={{color: "green"}}>VEZO</span>
                </span>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "30px", color: "#01021A"}}>
                <h3 style={{padding: 0, margin: 0, fontWeight:"bold"}}>Bienvenue sur le site de notre association !</h3>
                <h4 style={{padding: 0, margin: 0, fontWeight:"normal"}}>L'association Zazavezo oeuvre en faveur des enfants de l'île de Belo-sur-Mer à Madagascar</h4>
            </div>
        </div>
    )
}





const Homepage = () => {
    return(
        <div style={{display: "flex", flexGrow: 1, backgroundImage: `url(${beloboatTry2})`, backgroundSize: "100% 70%", backgroundRepeat: "no-repeat", backgroundColor: "#EADDDD"}}> 

            <div style={{display: "flex", alignItems: "end", gap: "110px", marginLeft: "55px", marginBottom: "30px"}}>
                <img
                    src={assochildren}
                    alt={"Belo picture"}
                    style={{ width: "25%", height: "auto", border: '1px solid #E9D2D2'}}
                />
        
                <TitleAndCaption/>
            </div>
        </div>
        
    )
}


const Entete = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Navbar/>
            <Homepage/>
            <Footer/>
        </div>
    )
}


export default Entete;