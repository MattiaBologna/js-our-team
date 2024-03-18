// ? MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// creare una funzione che dati 3 parametri restituisca un oggetto con i parametri come valori

function createMember(name, title, imagePath) {
    const member = {
        name: name,
        title: title,
        img: imagePath
    }
    return member
}

// creare l'array del team con all'interno gli oggetti generati dalla funzione createMember()

const ourTeam = [
    createMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    createMember('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    createMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    createMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    createMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    createMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg')
]

// console.log(ourTeam);


// ? MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// recuperare il container
const containerDOMElement = document.getElementById('container')
// console.log(containerDOMElement);

// Ciclare l'array e per ogni membro stampare le informazioni 
for (let i = 0; i < ourTeam.length; i++) {
    const currentMember = ourTeam[i]
    // console.log(`Nome: ${currentMember.name}, titolo: ${currentMember.title}, image path: ${currentMember.img}`);

    // sostituire il path dell'immagine con l'immagine effettiva 
    const memberImage = document.createElement('img');
    memberImage.src = `./img/${currentMember.img}`;

    // creare gli elementi nel dom che contengono le informazioni dei membri 
    const stringContainer = document.createElement('p');
    stringContainer.innerHTML = `Nome: ${currentMember.name}, titolo: ${currentMember.title}`;

    // creare le card con bootstrap 
    const memberCard = document.createElement('div');
    memberCard.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src='./img/${currentMember.img}' class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">${currentMember.name}</h5>
                <p class="card-text">${currentMember.title}</p>
            </div>
        </div>`

    // aggiungere alla card le classi di bootstrap per lo stile
    memberCard.classList.add('col-4', 'gy-5', 'd-flex', 'justify-content-center')

    // aggiungere al container nel DOM le informazioni e l'immagine di ciascun membro 
    // containerDOMElement.append(memberImage, stringContainer)

    // aggiungere al container nel DOM le card
    containerDOMElement.append(memberCard)
}

// ! BONUS 3
// Aggiungi un membro con un click 

// recuperare il pulsante aggiungi membro e aggiungere un event listener
const createMemberButtonDOMElement = document.getElementById('createMember')
createMemberButtonDOMElement.addEventListener('click', function() {

    // chiedere all'utente nome e titolo del nuovo membro
    const newMemberName = prompt('Inserisci il nome del membro')
    const newMemberTitle = prompt('inserisci il titolo del membro')

    // creare la carta del nuovo membro 
    const memberCard = document.createElement('div');
    memberCard.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src='./img/new-member.jpg' class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">${newMemberName}</h5>
                <p class="card-text">${newMemberTitle}</p>
            </div>
        </div>`

    // aggiungere alla card le classi di bootstrap per lo stile
    memberCard.classList.add('col-4', 'gy-5', 'd-flex', 'justify-content-center')

    // aggiungere al container nel DOM le card
    containerDOMElement.append(memberCard)
})


// ? MILESTONE 2:
// Stampare le stesse informazioni su DOM semplicemente come stringhe

// creare degli elementi nel DOM dove inserire le informazioni come stringhe 
// recuperare il container
// const containerDOMElement = document.getElementById('container')
// console.log(containerDOMElement);

// per ogni membro creare un elemento nel container e mostrarlo a schermo 

// for (let i = 0; i < ourTeam.length; i++) {
//     const currentMember = ourTeam[i];
//     const stringContainer = document.createElement('p');
//     stringContainer.innerHTML = `Nome: ${currentMember.name}, titolo: ${currentMember.title}, image path: ${currentMember.img}`;
//     containerDOMElement.append(stringContainer)
// }


// ! BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// stampare a schermo le varie immagini a schermo 

// for (let i = 0; i < ourTeam.length; i++) {
//     const currentMember = ourTeam[i];
//     // crea un oggetto immagine 
//     const memberImage = document.createElement('img');
//     memberImage.src = `./img/${currentMember.img}`;
//     containerDOMElement.append(memberImage)
// }


// ! BONUS 2:
// Organizzare i singoli membri in card/schede