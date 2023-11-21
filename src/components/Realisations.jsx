import Navbar from "./Navbar";
import Footer from "./Footer";
import beloboat from "../assets/beloboat.jpg";


const Content = () => {
    return(
        <div style={{flexGrow: 1, backgroundImage: `url(${beloboat})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "40% 70%", opacity: "0.5"}}>
            <div>
                <h1>RÉALISATIONS</h1>
            </div>
            <ul>
                <li>1 école primaire publique (EPP) de Grande section maternelle au Cours moyen seconde année,
                    Au total près de 500 enfants dont 30 en maternelle.</li>

                <li>1 collège enseignement général public 350 jeunes de 6 ème à la 3 ème (CEG)</li>
                <li>1 centre de santé de base (CSB) où travaillent une sage femme-infirmière et un médecin, tous deux fonctionnaires, le médecin est présent maximum 90 jours par an.</li>

                <li>1 école catholique privée gérée depuis la rentrée 2015/2016 par
                    Les Sœurs trinitaires de Rome arrivées au village le 13 juillet 2015,
                    Cette école accueillait 412 enfants à la rentrée 2017</li>
            </ul>
            <ul>
                <li>Un éducateur a été recruté auprès du Cisco (équivalent de notre éducation nationale)</li>
                <li>Entre le 8 juin et le 24 juin la clôture, la case et les toilettes ont été réalisées</li>
                <li>Création d’un potager</li>
                <li>Chaque enfant reçoit le matériel nécessaire pour sa scolarité 
                (cahier, crayon, gomme, pochette de crayons de couleurs, taille-crayon, règle)</li>
                <li>Chaque vendredi 1 sachet 30 g de lessive +1 savon est distribué à chacun des 
                15 enfants afin qu’ils puissent intégrer une notion d’hygiène de base    
                et faire leur lessive le samedi matin.</li>      
            </ul>
        </div>
    )
};

const Realisations = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
};

export default Realisations;