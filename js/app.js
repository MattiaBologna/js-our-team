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

console.log(ourTeam);

// ? MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// Ciclare l'array e per ogni membro stampare le informazioni 
for (let i = 0; i < ourTeam.length; i++) {
    const currentMember = ourTeam[i]
    console.log(`Nome: ${currentMember.name}, titolo: ${currentMember.title}, image path: ${currentMember.img}`);
}

// ? MILESTONE 2:
// Stampare le stesse informazioni su DOM semplicemente come stringhe
// ! BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// ! BONUS 2:
// Organizzare i singoli membri in card/schede