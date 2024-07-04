import emailIcon from "../assets/emailIcon.png";
import telephoneIcon from "../assets/telephoneIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import { Link } from "react-router-dom";
import React from "react";
import PhonePopUp from "./PhonePopUp";

const PhoneComponent = () => {
    const [clicked, setClicked] = React.useState(false);
    return (
        <div className="relative">
            <img
                onClick={() => setClicked(!clicked)}
                src={telephoneIcon}
                alt="icon element"
                className="flex no-underline w-12 h-auto cursor-pointer"
            />
            {clicked && (
                <div className="absolute top-[-140px]">
                    <PhonePopUp onClose={() => setClicked(false)} />
                </div>
            )}
        </div>
    );
}


const Footer = () => {
    return(
        <div className="bg-[#BD894C] w-full"style={{height: "20%"}}>
            <div className="flex justify-center">
                <h4 className="mt-2.5 tracking-[25px] text-[#01021A] pl-6 mb-2.5">CONTACT</h4>
            </div>
            <ul className="flex justify-center list-none p-0 mb-5 gap-7">
                <li>
                    <Link to="mailto:associationzazavezo@gmail.com">
                        <img 
                            src={emailIcon}
                            alt="icon element"
                            className="flex no-underline w-12 h-auto"
                        />
                    </Link>
                </li>
                <li>
                    <PhoneComponent />
                </li>
                <li>
                    <Link to="https://www.facebook.com/zaza.vezo.12?locale=fr_FR">
                        <img 
                            src={facebookIcon}
                            alt="icon element"
                            className="flex no-underline w-12 h-auto"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="#instagram">
                        <img 
                            src={instagramIcon}
                            alt="icon element"
                            className="flex no-underline w-12 h-auto"
                        />
                    </Link>
                </li>
            </ul>
            <div className="flex justify-center">
                <h4 style={{fontWeight: "normal", color: "#01021A", margin: 0, paddingBottom: "5px"}}>ZAZAVEZO</h4>
            </div>
        </div>

    )
}

export default Footer;