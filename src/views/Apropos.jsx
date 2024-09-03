import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import beloboatOP from "../assets/beloboatOP.jpg";


const Content = () => {
    return(
        <div className="flex flex-col items-center grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)] pb-10" style={{backgroundImage: `url(${beloboatOP})`}}>
            <div className="m-[50px]">
                <h1>BELO-SUR-MER</h1>
            </div>
            <div className="w-2/3">
                Belo sur mer est un village de pêcheurs situé à Madagascar, sur le Canal Mozambique à 
                80 km au sud de Morondava, chef lieu de la région Menabé, accessible par la 
                mer toute l’année et en 4 heures de piste de mai à octobre.Cette commune 
                rurale accueille 350 familles dont l’activité principale est la pêche traditionnelle
                et la construction de boutres (goélettes), ce qui la rend attractive d’un point 
                de vue touristique. Elle regroupe administrativement 17 villages de brousse.
            </div>
            <div className="m-[50px]">
                <h1>L’ASSOCIATION</h1>
            </div>
            <div className="w-2/3">
            Le 6 juin 2015, un naufrage a endeuillé le village de Belo-sur-mer: 28 personnes sont décédées, principalement des
femmes, les enfants ont pour la plupart été sauvés mais restent orphelins .
La pénurie de poisson et autres produits de la mer ne leur permet plus de couvrir leurs besoins .
Ainsi les hommes embarquent sur les goélettes pour les saisons de pêche au nord de l’île, laissant
femmes et enfants. Ces derniers sont rapidement déscolarisés faute de revenus .
Au cours de notre séjour, nous avons rencontré les femmes du village ainsi que le maire, qui nous a
sollicités pour construire un local d’accueil pour les enfants descolarisés et les orphelins .
Ainsi est née ZAZAVEZO, porteuse du projet de construction de la Maison pour Tous pour favoriser
l’accompagnement vers l’alphabétisation , la professionnalisation des publics en difficulté, l'aide au
passage du CEPE et Brevet et l'accueil des nomades de la mer .
A Madagascar, il est de coutume de s’en remettre au chef du village avant toute action. Ainsi, une
parcelle de terrain sur laquelle se trouve une petite maison en état de délabrement au cœur du
village face au temple protestant et au marché nous a été allouée.

La pérennité du projet passe par une collaboration étroite avec les enseignants, qui sont présents toute
l’année, et se chargent directement de l'animation et de l'éducation des enfants.
Nous avons donc établi un échange: leurs élèves viennent sur notre site pendant les vacances pour
des ateliers lecture et jeux.

Nos jeunes sont scolarisés à l’école publique ou au collège du village. Ceux qui le souhaitent sont
initiés à la cuisine de brousse (cuisson au moyen d'un four solaire) et à la broderie.
            </div>
        </div>
    )
};

const Apropos = () => {
    return(
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <Content/>
        <Footer/>
        </div>
    )
}

export default Apropos;