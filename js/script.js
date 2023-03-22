// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

//!------------------------------------------------------------------------------------------------------------------------------------

// ?MILESTONE 0 & 1

// array di oggetti (il mega team di developers):

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }

];

// stampo in consile l'array contenente l'oggetto
console.log(team);

//? ###########################################################################################


const h1 = document.querySelector("h1");
const p = document.querySelector("p");

h1.innerHTML = " OUR TEAM ";
p.innerHTML = "SUPER LOREM IPSUS";



//! MILESTONE 2 + BONUS 1 + BONUS 2

const row = document.querySelector(".row");
let cards = "";
for (let i = 0; i < team.length; i++) {
    const currentMember = team[i];
    cards += `<div class="col">
                  <div class="card text-black">
                         <img src="img/${currentMember.photo}" alt="...">
                         <div class="card-body">
                                <h4 class="card-title">${currentMember.name}</h4>
                                <h5 class="card-text">${currentMember.role}</h5>
                         </div>
                    </div>    
               </div>`
}

row.innerHTML = cards;
console.log(row);


