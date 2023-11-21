import emailIcon from "../assets/emailIcon.png";
import telephoneIcon from "../assets/telephoneIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebookIcon.png";

const Footer = () => {
    
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

export default Footer;