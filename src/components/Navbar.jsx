import { Link } from "react-router-dom";

const Navbar = () => {

    const navElements = [{title: "Accueil", id: 1, link: "/home"}, 
                        {title: "Objectifs", id: 2, link: "/objectifs"}, 
                        {title:"Réalisations", id: 3, link:"/realisations"},
                        {title: "Devenir adhérent(e)/Contribuer", id: 4, link: "/contribuer"},
                        {title: "A propos", id: 5, link: "/apropos"}]

    const listNavElements = navElements.map(element =>
    <li key={element.id}>
        <Link to={element.link} style={{display: "flex", color: "#01021A", textDecoration: "none", fontWeight: "bold"}}>
            {element.title}
        </Link>
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

export default Navbar;