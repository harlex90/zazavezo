import { Link } from "react-router-dom";

const Navbar = () => {

    const navElements = [{title: "Accueil", id: 1, link: "/home"}, 
                        {title: "Objectifs", id: 2, link: "/objectifs"}, 
                        {title:"Réalisations", id: 3, link:"/realisations"},
                        {title: "Devenir adhérent(e)/Contribuer", id: 4, link: "/contribuer"},
                        {title: "A propos", id: 5, link: "/apropos"}]

    const listNavElements = navElements.map(element =>
    <li key={element.id}>
        <Link to={element.link} className="flex no-underline hover:underline font-bold text-[#01021A] text-center">
            {element.title}
        </Link>
    </li>
    );
    return(
        <nav>
            <ul className="flex flex-col md:flex-row justify-center list-none p-0 w-full h-fit md:h-24 gap-2 md:gap-6 lg:gap-24 items-center bg-[#EADDDD]">
                {listNavElements}
            </ul>
        </nav>
            
    
    )
    
}

export default Navbar;