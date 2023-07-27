import enveloppe from "../assets/enveloppe.png";
import telephone from "../assets/telephone.png";
import instagram_logo from "../assets/instagram_logo.png";
import facebookF from "../assets/facebookF.png";
import beloboatCropped from "../assets/beloboatCropped.jpg";
import assochildren from "../assets/assochildren.jpg";


const TitleAndCaption = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <div>
                <span style={{fontSize: "5rem", fontWeight:"normal", opacity: "0.9"}}>
                    <span style={{color: "red"}}>ZAZA</span>
                    <span style={{color: "green"}}>VEZO</span>
                </span>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "40px", color: "#01021A"}}>
                <h3 style={{padding: 0, margin: 0, fontWeight:"normal"}}>Bienvenue sur le site de notre association !</h3>
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
        <div style={{backgroundImage: `url(${beloboatCropped})`, backgroundSize: "100% 900px", backgroundRepeat: "no-repeat", height: "1200px", backgroundColor: "#EADDDD"}}> 
            <nav>
                <ul style={{display: "flex", justifyContent: "center", listStyleType: "none", margin: 0, padding: 0, backgroundColor: "#EADDDD", width: "100%", height: "90px", gap: "90px", alignItems: "center"}}>
                    {listNavElements}
                </ul>
            </nav>
            <div style={{display: "flex", height: "87%", alignItems: "end", gap: "170px"}}>
                <img
                    src={assochildren}
                    alt={"Belo picture"}
                    style={{ width: "580px", height: "auto", border: '1px solid #E9D2D2', marginLeft: "45px"}}
                />
                <TitleAndCaption/>
            </div>
        </div>
    
    )
}

const DisplayFooter = () => {
    
    const footerElements = [{title: "Telephone", id: 1, icon: telephone, link: "#telephone"},
                            {title: "Email", id: 2, icon: enveloppe, link: "#email"},
                            {title: "Facebook", id: 3, icon: facebookF, link: "#facebook"},
                            {title: "Instagram", id: 4, icon: instagram_logo, link: "#instagram"}]

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
            
        <div style={{backgroundColor: "#BD894C", width: "100%", height: "200px"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h4 style={{color: "#01021A", marginTop: "10px", letterSpacing: "20px"}}>CONTACT</h4>
            </div>
            <ul style={{display: "flex", justifyContent: "center", listStyleType: "none", margin: 0, padding: 0}}>
                {listFooterElements}
            </ul>
            <div style={{display: "flex", justifyContent: "center", height: "45%", alignItems: "end"}}>
                <h4 style={{fontWeight: "normal", color: "#01021A", margin: 0, padding: 0}}>ZAZAVEZO</h4>
            </div>
        </div>

    )
}

const Entete = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
           <div style={{flexGrow: 1}}> 
                <DisplayNavbar/>
            </div>
                
            <DisplayFooter/>
            
        </div>
    )
}


export default Entete;