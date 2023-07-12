


const DisplayTitle = () => {
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <span style={{color: "red"}}>ZAZA</span><span style={{color: "green"}}>VEZO</span>
        </div>
    )
}



const Navbar = () => {

    const navElements = [{title: "Accueil", id: 1, link: "#home", float: "left"}, 
                        {title: "Objectifs", id: 2, link: "#objectifs", float: "left"}, 
                        {title:"Réalisations", id: 3, link:"#realisations", float: "left"},
                        {title: "Devenir adhérent(e)/Contribuer", id: "4", link: "#contribuer", float: "left"},
                        {title: "A propos", id: "5", link: "#apropos", float: "right"}]

    const listNavElements = navElements.map(element =>
    <li style={{float: element.float, borderRight:"1px solid #bbb", height: "75px"}} key={element.id}>
        <a style={{display: "flex", color: "white", textDecoration: "none", padding: "20px", marginTop: "5px"}} to={element.link}>
            {element.title}
        </a>
    </li>
    );
    return(
        
        <nav style={{display: "flex", justifyContent: "center"}}>
            <ul style={{listStyleType: "none", margin: 0, padding: 0, backgroundColor: "blue", width: "75%", height: "75px"}}>
                {listNavElements}
            </ul>
        </nav>
    
    )
}

const Entete = () => {
    return(
        <div>
            <DisplayTitle/>
            <Navbar/>
        </div>
    )
}


export default Entete;