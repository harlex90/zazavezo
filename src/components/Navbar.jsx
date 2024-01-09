import { Link } from "react-router-dom";

const Navbar = () => {

    const navElements = [{title: "Accueil", id: 1, link: "/home"}, 
                        {title: "Objectifs", id: 2, link: "/objectifs"}, 
                        {title:"Réalisations", id: 3, link:"/realisations"},
                        {title: "Devenir adhérent(e)/Contribuer", id: 4, link: "/contribuer"},
                        {title: "A propos", id: 5, link: "/apropos"}]

    const listNavElements = navElements.map(element =>
    <li key={element.id}>
        <Link to={element.link} className="flex no-underline hover:underline font-bold text-[#01021A]">
            {element.title}
        </Link>
    </li>
    );
    return(
        <nav>
            <ul className="flex justify-center list-none m-0 p-0 w-full h-24 gap-24 items-center bg-[#EADDDD]">
                {listNavElements}
            </ul>
        </nav>
            
    
    )
    
}

export default Navbar;