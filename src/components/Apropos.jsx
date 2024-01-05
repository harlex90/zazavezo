import Navbar from "./Navbar";
import Footer from "./Footer";
import beloboat from "../assets/beloboat.jpg";


const Content = () => {
    return(
        <div className="flex flex-col items-center grow bg-no-repeat bg-cover bg-[left_calc(0%)_top_calc(70%)] opacity-50" style={{backgroundImage: `url(${beloboat})`}}>
            <div className="m-[50px]">
                <h1>BELO-SUR-MER</h1>
            </div>
            <div className="w-2/3">
                Belo sur mer est un village de pêcheurs situé sur le Canal Mozambique à 
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
                Depuis vingt ans je séjourne plusieurs mois par an à Belo.
                J'ai pu constater que le passage des derniers cyclones de 2009 et 2012, les naufrages de 2015 et 2016 , ont fort modifié 
                les conditions de vie au quotidien des villageois .
                La pénurie de poisson et autres produits de la mer ne leur permet plus de couvrir leurs besoins .
                Ainsi les hommes embarquent sur les goélettes pour les saisons de pêche au nord de l’ile laissant femmes et enfants, ces derniers sont rapidement déscolarisés faute de revenus .

                Forte de ce constat et mes diverses rencontres parmi lesquelles une association normande oeuvrant à Madagascar et une association sarthoise oeuvrant au Sénégal qui se sont mobilisées pour soutenir le projet de scolarisation et de professionnalisation des filles-mères et orphelins de Belo sur mer .
                Mon séjour du 3 juin au 15 septembre 2015 aura été exploratoire, les 46kgs de bagages autorisés par la compagnie Air Madagascar étaient composés de divers dons (vêtements chauds, combinaisons de plongée, matériel scolaire, tee-shirt sportifs).
                Le 6 juin 2015 un naufrage a endeuillé le village: 28 personnes sont décédées, certaines encore portées disparues à ce jour principalement des femmes dont la sage femme du village , les enfants ont pour la plupart été sauvés mais restent orphelins.
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