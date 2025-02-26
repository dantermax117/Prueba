
const options = {
    header: {},
    body: {},
    params: {}
};


fetch('https://pokeapi.co/api/v2/',options)
.then(response => { 
    return response.json()
})
.then(data => {
    //data
    pintarCosas(data);

})
.catch(error => {
    console.log({msg: error})
})

function pintarCosas(informacion){
    document.getElementById("form-pokemon").addEventListener("submit", function(event) {
        event.preventDefault();

        let inputPokemon = document.getElementById("inputPokemon");
        let pokemonTexto = inputPokemon.value.trim();

        if(pokemonTexto == ""){
            alert("Por favor, ingresa un pokemon")
            return
        }
        let tabla = document.getElementById("cuerpo-pokemon");
        let nuevaFila = document.createElement("tr");
        let columnaNueva = document.createElement("td");
        columnaNueva.textContentç = pokemonTexto;
        columnaNueva.classList.add("pokemon-texto")

        //Aqui se mostrara el pokemon que el cliente haya elegido
        nuevaFila.appendChild(columnaNueva);
        tabla.appendChild(nuevaFila);
        inputPokemon.value = "";






    })
    return informacion
}