import Navbar from "./Navbar";
import Footer from "./Footer";
import beloboat from "../assets/beloboat.jpg";


const Content = () => {
    return(
        <div className="grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)] opacity-50" style={{backgroundImage: `url(${beloboat})`}}>
            <div>
                <h1>OBJECTIFS</h1>
                <h3>Les objectifs de l’association:</h3>
            </div>
            <div>
                <ul>
                    <li>Concrétiser les droits de l’enfant et améliorer les conditions de vie des plus défavorisés</li>
                    <li>Assurer la scolarisation régulière et durable des orphelins du village</li>
                    <li>Former les enseignants aux pédagogies </li>
                    <li>Réduire l’extrême pauvreté par le biais d’activités génératrice de revenus</li>
                    <li>Rendre les femmes autonomes économiquement par l’alphabétisation en langue locale et en français</li>
                    <li>Renforcer les compétences techniques des femmes afin d’obtenir une production de meilleure qualité et d’assurer la securité alimentaire de leurs enfants.</li>
                    <li>Leur donner les moyens d’agir plus facilement dans leur environnement , en leur apprenant à transcrire, à lire, calculer et les doter de capacités à gérer leur quotidien en vue d’une bonne gouvernance (démocratie, transparence, lutte contre la pauvreté ….)</li>
                    <li>Sensibiliser les élèves à préserver l’environnement afin de réduire les effets de la pollution.</li>
                </ul>
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