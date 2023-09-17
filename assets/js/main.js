const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 20;
let offset = 0;


function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
         const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <button class="modalBtn" type="button">i</button>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                         alt="${pokemon.name}">
                
                <div class="modal hidden">
                <div class="modal-content ${pokemon.type}">
                <span class="closeBtn">&times;</span>
                <h2 class="name">${pokemon.name}</h2>
                <span class="numberExpand">#${pokemon.number}</span>
                <div class="expandedPhoto">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <span class="height">Height: ${pokemon.height}</span>
                <span class="height">Weight: ${pokemon.weight}</span>
                <div>
                <ol class="abilities">
                        ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                </ol>
                </div>
                </div>
                </div>

            </li>
        `).join('')

        
        pokemonList.innerHTML += newHtml;

        const modalBtn = document.querySelectorAll('.modalBtn');
        modalBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
        const modal = document.querySelectorAll('.modal')[index];
        modal.style.display = 'block';
    });
  });

        const closeBtns = document.querySelectorAll('.closeBtn');
        closeBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
        const modal = document.querySelectorAll('.modal')[index];
        modal.style.display = 'none';
    });
        }) 
    })}

    

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})


//                 <button class="modalBtn" type="button">i</button>
