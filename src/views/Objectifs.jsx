import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import beloboatOP from "../assets/beloboatOP.jpg";
import sucettesmaisonCropped from "../assets/sucettesmaisonCropped.jpg";
import poissons from "../assets/poissons.jpg";


const Content = () => {
    return(
        <div className="flex flex-col items-center grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)] pb-10" style={{backgroundImage: `url(${beloboatOP})`}}>
            <div className="m-[50px]">
                <h1> LES OBJECTIFS DE L'ASSO:</h1>
            </div>
            <div className="flex flex-col md:mx-[15%] gap-8 mx-10">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                    <ul className="list-disc">
                        <li className="mb-5">Concrétiser les droits de l’enfant et améliorer les conditions de vie des plus défavorisés</li>
                        <li className="mb-5">Assurer la scolarisation régulière et durable des orphelins du village</li>
                        <li className="mb-5">Former les enseignants aux pédagogies actives </li>
                        <li className="mb-5">Réduire l’extrême pauvreté par le biais d’activités génératrices de revenus</li>
                    </ul>
                    <img
                        src={poissons}
                        alt={"poissons"}
                        style={{ display: "flex", width: "300px", height: "auto", border: '1px solid #E9D2D2'}}
                    />
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-8 justify-between items-center">
                    <img
                        src={sucettesmaisonCropped}
                        alt={"sucettes maison"}
                        style={{ display: "flex", width: "200px", height: "auto", border: '1px solid #E9D2D2'}}
                    />
                    <ul className="list-disc">
                        <li className="mb-5">Rendre les femmes autonomes économiquement par l’alphabétisation en langue locale et en français</li>
                        <li className="mb-5">Renforcer les compétences techniques des femmes afin d’obtenir une production de meilleure qualité et d’assurer la securité alimentaire de leurs enfants.</li>
                        <li className="mb-5">Leur donner les moyens d’agir plus facilement dans leur environnement , en leur apprenant à transcrire, lire, calculer et les doter de capacités à gérer leur quotidien en vue d’une bonne gouvernance (démocratie, transparence, lutte contre la pauvreté ….)</li>
                        <li className="mb-5">Sensibiliser les jeunes à la préservation de l’environnement afin de réduire les effets de la pollution.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

const Objectifs = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
};

export default Objectifs;