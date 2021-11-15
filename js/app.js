//llamar elementos de html
const URL = 'https://rickandmortyapi.com/api/character';
const all = document.getElementById('all');
const main = document.getElementById('main');
const selector = document.getElementById('selector')
const character = document.getElementById('character');

personajes();
//llamar personajes al selector
function personajes() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.map(element => {
            const opcion = document.createElement('option')
            character.appendChild(opcion)
            opcion.textContent = element.name
            selector.appendChild(opcion)
        });
    })
    .catch(error => console.log(error))
}

// crear cards
function card(data){
     const card_container = document.createElement('div');
    const card_name = document.createElement('p');
    const card_img_container = document.createElement('div');
    const card_img = document.createElement('img');

    // asignacion de clases
    card_container.classList.add('card_container');
    card_name.classList.add('card_name');
    card_img_container.classList.add('card_img_container');
    card_img.classList.add('card_img');

    //contenido a card
    card_name.textContent = data.name
    card_img.src = data.image

    //agregar elementos a su contenedor 
    card_container.appendChild(card_name)
    card_container.appendChild(card_img_container)
    card_img_container.appendChild(card_img)
    main.appendChild(card_container)
}

//mostrar todos los personajes
all.addEventListener('click',mostrartodos)
function mostrartodos(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        main.innerHTML = "";
        return data.results.map(character => {
            card(character);
        })
    })
}

//mostrar un personaje
selector.addEventListener('change',mostrar);
function mostrar(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const value = selector.value;
        return data.results.map(element =>{
            if (value == element.name){
                main.innerHTML = "";
                card(element)
            }
        })
    })
}

