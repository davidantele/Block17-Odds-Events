const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const pokemon = data.results;
    console.log(pokemon);
  } catch (err) {
    console.error(err.message);
  }
};
fetchPokemon();
