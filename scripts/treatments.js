// array with all treatments
let allTreatments = [];

// class to create treatment objects
class Treatment {
    treatmentCategory;
    treatmentName;
    treatmentDescription;
    treatmentTiming;
    treatmentPrice;
    treatmentVIP;

    constructor(treatmentCategory, treatmentName, treatmentDescription, treatmentTiming, treatmentPrice, treatmentVIP){
        this.treatmentCategory = treatmentCategory;
        this.treatmentName = treatmentName;
        this.treatmentDescription = treatmentDescription;
        this.treatmentTiming = treatmentTiming;
        this.treatmentPrice = treatmentPrice;
        this.treatmentVIP = treatmentVIP;
        allTreatments.push(this);
        localStorage.setItem('treatments', JSON.stringify(allTreatments)); // create list of all treatments in localStorage
    }
}



// list of treatments:
// 62 €
let facialKoBiDo = new Treatment("Soin visage","Soin du visage Ko Bi Do Jeunesse", `Ce soin combine les gestuelles de lifting naturel à un soin adapté aux zones les plus fragiles du visage, pour des résultats immédiats.`, 20, 62, false)
let facialEclat = new Treatment("Soin visage","Soin du visage Coup d'Eclat", `Profitez des délicates senteurs des fleurs tropicales de ce soin « coup d’éclat » et découvrez les bienfaits des premiers soins pour une peau nettoyée et un teint éclatant.`, 20, 62, false)
// 76 €
let gommageEpices = new Treatment("Gommage corps", "Gommage Aromatique aux Epices Energisant", `Offrez-vous ce soin exfoliant inspiré de Java à base d’épices et de sels de mer, qui vous transporte par ses délicates senteurs et vous offre une peau douce et satinée.`, 30, 76, false)
let gommagePapye = new Treatment("Gommage corps", "Gommage Purée de Papaye Sensoriel", `Découvrez ce soin gommant du Siam, utilisant la Purée de Papaye onctueuse aux grains fins. Délicatement exfoliée, votre peau retrouve toute sa douceur.`, 30, 76, false)
let massageReflex = new Treatment("Massage pieds/mains", "Massage Réflexologie Jambes et Pieds Légèreté", `Retrouvez des jambes et des pieds légers grâce à ce massage tonique et drainant qui utilise une technique d’acupression.`, 30, 76, false)
let massageDos = new Treatment("Massage à deux", "Massage Délice du Dos Délassant", `Découvrez ce massage relaxant à l’huile chaude. Insistant sur les muscles du dos et la nuque, ce soin libère les tensions pour vous procurer un bien-être total.`, 30, 76, false)
// 124 €
let facialVIPKoBiDo = new Treatment("Soin visage", "Soin du visage Ko Bi Do Rédensification", `Véritable soin "anti-âge global", ce lifting manuel inspiré du massage japonais Ko Bi Do, agit en profondeur sur les rides, la fermeté, les taches pigmentaires et l'éclat, tout en insistant sur le contour des yeux, la bouche, le décolleté et les bras. Vous retrouvez une peau repulpée, lissée, un teint éclatant et un esprit parfaitement détendu.`, 50, 124, false)
let facialHydratant = new Treatment("Soin visage", "Soin du visage Hydratant Répulpant", `Ce soin d’origine balinaise hydrate en profondeur, équilibre le microbiote cutané et illumine la peau grâce à l’association de 5 fleurs tropicales. Les massages du visage, de la nuque et des trapèzes libèrent les tensions de la vie quotidienne.`, 50, 124, false)
// 186 €
let facialTaoiste = new Treatment("Soin visage", "Soin du visage Taoïste Régénérant", `Ce soin de prévention inspiré de la tradition chinoise travaille sur les points d'acupression pour détendre les traits du visage et du regard. Inclut un massage spécifique du contour de l'œil.`, 80, 186, true)
let massageOriental = new Treatment("Massage corps", "Massage Oriental Sensoriel", `Voyagez au cœur des traditions orientales grâce à ce massage qui travaille l’ensemble du corps avec de l’huile d’argan chauffée. Cet enveloppement de manœuvres lentes et profondes vous procure un moment de pur bien-être.`, 80, 186, true)
let massageIndien = new Treatment("Massage corps", "Massage Ayurvédique Indien Tonique", `Profitez de ce massage inspiré de l’Abhyanga traditionnel, tonifiant à l’huile chaude. Le rythme énergétique et alterné délie les tensions et détend les muscles.`, 80, 186, true)
// 230 €
let ritualImperial = new Treatment("Grand rituel", "Grand Rituel Impérial de Jeunesse", `Issu des méthodes ancestrales de beauté japonaises, ce rituel se compose d’une gestuelle connue à ce jour comme l’une des plus efficaces pour retrouver et prolonger la jeunesse du visage, du cou et du décolleté.`, 110, 230, true)
let ritualPolynesie = new Treatment("Grand rituel", "Grand Rituel Sublime de Polynésie", `Inspiré des traditions de beauté polynésiennes, ce rituel permet un lâcher-prise immédiat et le relancement de l’énergie physique et psychique.`, 110, 230, true)
let ritualJetLag = new Treatment("Grand rituel", "Grand Rituel du Voyageur Anti-Jetlag", `Récupérez profondément votre énergie et resynchronisez votre horloge interne grâce à ce parcours unique de soins.`, 110, 230, true)
let ritualDuo = new Treatment("Grand rituel", "Grand Rituel de Félicité à Deux", `Partagez un moment de bien-être et de relaxation inoubliable à deux. Ce rituel composé d’un hammam et d’un massage du corps permet de vivre une expérience unique pour retrouver énergie et harmonie. Prix par personne.`, 110, 230, true)
// 300 €
let privateDuo = new Treatment("Privatization à deux", "Palace pour Deux", `Profitez d'un espace privé pour profiter des soins. Accès privé vers la piscine en extérieur. Il est possible d'ajouter d'autres options.`,180, 300, true);
let privateHotTub = new Treatment("Privatization à plusieurs", "Enterrement Vie de Jeune Fille/Garçon", `Privatisation d'un espace avec un grand bain à rému. Plusieurs options peuvent être ajoutés : soins, repas, boissons. Limité à 8 personnes`,180, 300, true);

console.log(allTreatments);

// retrieve placements
const pricingList = document.querySelector(".pricing-list");
const vipPricingList = document.querySelector(".vip-pricing-list");

// add treatments to appropriate placements
for(let i = 0 ; i < allTreatments.length ; i ++){

    if (allTreatments[i].treatmentVIP){
    
        vipPricingList.innerHTML +=
        `
            <div class="price-card">

                <div class="left-side">
                    <h4>${allTreatments[i].treatmentName}</h4>
                    <p>${allTreatments[i].treatmentDescription}</p>
                </div>

                <div class="right-side">
                    <p>${allTreatments[i].treatmentTiming} min</p>
                    <p>${allTreatments[i].treatmentPrice} €</p>
                    <button class="reserve-button">Réserver</button>
                </div>

            </div>
        
        `;

    } else {
        pricingList.innerHTML += 
        `
            <div class="price-card">
            
                <div class="left-side">
                <h4>${allTreatments[i].treatmentName}</h4>
                <p>${allTreatments[i].treatmentDescription}</p>
            </div>

            <div class="right-side">
                <p>${allTreatments[i].treatmentTiming} min</p>
                <p>${allTreatments[i].treatmentPrice} €</p>
                    <button class="reserve-button">Réserver</button>
                </div>
            
            </div>
            
        `;
    }
}

// retrieve user signed-up
let retrieveUserInfo = localStorage.getItem('user'); // format string
let user = JSON.parse(retrieveUserInfo);// format objet

const allReserveBtn = document.querySelectorAll('.reserve-button');

allReserveBtn.forEach(element =>{
    element.addEventListener("click", isValid =>{
        if(user.loggedIn){
            window.location.href = "../pages/account.html";
        } else { 
            window.location.href = "../pages/log-in.html";
        }

    })
})

