import Navbar from "./Navbar";
import Footer from "./Footer";
import beloboatOP from "../assets/beloboatOP.jpg";
import bibliotheque from "../assets/bibliotheque.jpg";
import construction from "../assets/construction.jpg";


const Content = () => {
    return(
        <div className="flex flex-col grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)]" style={{backgroundImage: `url(${beloboatOP})`}}>
            <div className=" flex justify-center m-[50px]">
                <h1>NOS RÉALISATIONS</h1>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center items-center">
                    <ul className="list-disc w-1/2">
                        <li>1 école primaire publique (EPP) de Grande section maternelle au Cours moyen seconde année,
                            Au total près de 500 enfants dont 30 en maternelle.</li>

                        <li>1 collège enseignement général public 350 jeunes de 6 ème à la 3 ème (CEG)</li>
                        <li>1 centre de santé de base (CSB) où travaillent une sage femme-infirmière et un médecin, tous deux fonctionnaires, le médecin est présent maximum 90 jours par an.</li>

                        <li>1 école catholique privée gérée depuis la rentrée 2015/2016 par
                            Les Sœurs trinitaires de Rome arrivées au village le 13 juillet 2015,
                            Cette école accueillait 412 enfants à la rentrée 2017</li>
                    </ul>
                    <img
                        src={bibliotheque}
                        alt={"Belo picture"}
                        style={{ display: "flex", width: "20%", height: "auto", border: '1px solid #E9D2D2'}}
                    />
                </div>
                <div className="flex justify-center items-center gap-11">
                    <img
                        src={construction}
                        alt={"Belo picture"}
                        style={{ display: "flex", width: "20%", height: "auto", border: '1px solid #E9D2D2'}}
                    />
                    <ul className="list-disc w-1/2">
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
            </div>
        </div>
    )
};

const Realisations = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
};

export default Realisations;