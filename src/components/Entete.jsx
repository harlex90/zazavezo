import emailIcon from "../assets/emailIcon.png";
import telephoneIcon from "../assets/telephoneIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import beloboatTry2 from "../assets/beloboatTry2.jpg";
import assochildren from "../assets/assochildren.jpg";


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



const DisplayNavbar = () => {

    const navElements = [{title: "Accueil", id: 1, link: "#home"}, 
                        {title: "Objectifs", id: 2, link: "#objectifs"}, 
                        {title:"Réalisations", id: 3, link:"#realisations"},
                        {title: "Devenir adhérent(e)/Contribuer", id: 4, link: "#contribuer"},
                        {title: "A propos", id: 5, link: "#apropos"}]

    const listNavElements = navElements.map(element =>
    <li key={element.id}>
        <a style={{display: "flex", color: "#01021A", textDecoration: "none", fontWeight: "bold"}} to={element.link}>
            {element.title}
        </a>
    </li>
    );
    return(
        <nav>
            <ul style={{display: "flex", justifyContent: "center", listStyleType: "none", margin: 0, padding: 0, backgroundColor: "#EADDDD", width: "100%", height: "90px", gap: "90px", alignItems: "center"}}>
                {listNavElements}
            </ul>
        </nav>
            
    
    )
    
}

const HomepageBackground = () => {
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

const DisplayFooter = () => {
    
    const footerElements = [{title: "Email", id: 2, icon: emailIcon, link: "#email"},
                            {title: "Telephone", id: 1, icon: telephoneIcon, link: "#telephone"},
                            {title: "Facebook", id: 3, icon: facebookIcon, link: "#facebook"},
                            {title: "Instagram", id: 4, icon: instagramIcon, link: "#instagram"}]

    const listFooterElements = footerElements.map(element =>
    <li key={element.id}>
        <img 
            src={element.icon}
            alt="icon element"
            style={{display: "flex", textDecoration: "none", width: "50px", height: "auto"}}
        />
    </li>
    );
    return(
            
        <div style={{backgroundColor: "#BD894C", width: "100%", height: "20%"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h4 style={{color: "#01021A", marginTop: "10px", letterSpacing: "25px", paddingLeft: "25px", marginBottom: "10px"}}>CONTACT</h4>
            </div>
            <ul style={{display: "flex", justifyContent: "center", listStyleType: "none", padding: 0, marginBottom: "20px", gap: "30px"}}>
                {listFooterElements}
            </ul>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h4 style={{fontWeight: "normal", color: "#01021A", margin: 0, paddingBottom: "5px"}}>ZAZAVEZO</h4>
            </div>
        </div>

    )
}

const Entete = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <DisplayNavbar/>
            <HomepageBackground/>
            <DisplayFooter/>
        </div>
    )
}


export default Entete;