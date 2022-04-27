import { useEffect, useState } from 'react';
import { pokemonAPI } from '../api/pokemonAPI';
import { PokemonPaginated, SimplePokemon } from '../interfaces/PokemonIterface';
import { mapPokemonList } from '../utils/pokemon.utils';

export const usePokemonSearch = () => {
  const [simplePokemonList, setSimplePokemon] = useState<SimplePokemon[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const loadPokemonsInfo = async () => {
    const resp = await pokemonAPI.get<PokemonPaginated>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );
    const newSimplePokemons = mapPokemonList(resp.data.results);
    setSimplePokemon([...newSimplePokemons]);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemonsInfo();
  }, []);

  return { simplePokemonList, isFetching, loadPokemonsInfo };
};
