import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import beloboatOP from "../assets/beloboatOP.jpg";
import bibliotheque from "../assets/bibliotheque.jpg";
import construction from "../assets/construction.jpg";


const Content = () => {
    return(
        <div className="flex flex-col grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)] pb-10" style={{backgroundImage: `url(${beloboatOP})`}}>
            <div className=" flex justify-center m-[50px]">
                <h1>NOS RÉALISATIONS</h1>
            </div>
            <div className="flex flex-col md:mx-[15%] gap-8 mx-10">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                    <ul className="list-disc">
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
                        style={{ display: "flex", width: "300px", height: "auto", border: '1px solid #E9D2D2'}}
                    />
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-8 justify-between items-center">
                    <img
                        src={construction}
                        alt={"Belo picture"}
                        style={{ display: "flex", width: "300px", height: "auto", border: '1px solid #E9D2D2'}}
                    />
                    <ul className="list-disc">
                        <li>Un éducateur a été recruté auprès du Cisco (équivalent de notre éducation nationale)</li>
                        <li>Entre le 8 juin et le 24 juin la clôture, la case et les toilettes ont été réalisées</li>
                        <li>Création d’un potager: cocos et graines diverses (don de Kokopelli France)</li>
                        <li>Achat d'un four solaire pour les ateliers cuisine et broderie</li>
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