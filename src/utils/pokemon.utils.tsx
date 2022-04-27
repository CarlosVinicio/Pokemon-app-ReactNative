import { Result, SimplePokemon } from '../interfaces/PokemonIterface';

export const mapPokemonList = (pokemonList: Result[]) => {
  const newPokemonList: SimplePokemon[] = pokemonList.map(pokemon => {
    const urlParts = pokemon.url.split('/');
    const id = urlParts[urlParts.length - 2];
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return {
      ...pokemon,
      id,
      picture,
    };
  });
  return newPokemonList;
};
