import emailIcon from "../assets/emailIcon.png";
import telephoneIcon from "../assets/telephoneIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import { Link } from "react-router-dom";




const Footer = () => {
    
    const footerElements = [{title: "Email", id: 2, icon: emailIcon, link: "mailto:associationzazavezo@gmail.com"},
                            {title: "Telephone", id: 1, icon: telephoneIcon, link: "#telephone"},
                            {title: "Facebook", id: 3, icon: facebookIcon, link: "#facebook"},
                            {title: "Instagram", id: 4, icon: instagramIcon, link: "#instagram"}]

    const listFooterElements = footerElements.map(element =>
    <li key={element.id}>
        <Link to={element.link}>
            <img 
                src={element.icon}
                alt="icon element"
                className="flex no-underline w-12 h-auto"
            />
        </Link>
    </li>
    );
    return(
            
        <div style={{backgroundColor: "#BD894C", width: "100%", height: "20%"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h4 className="mt-2.5 tracking-[25px] text-[#01021A] pl-6 mb-2.5">CONTACT</h4>
            </div>
            <ul className="flex justify-center list-none p-0 mb-5 gap-7">
                {listFooterElements}
            </ul>
            <div className="flex justify-center">
                <h4 style={{fontWeight: "normal", color: "#01021A", margin: 0, paddingBottom: "5px"}}>ZAZAVEZO</h4>
            </div>
        </div>

    )
}

export default Footer;