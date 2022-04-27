import { useEffect, useRef, useState } from 'react';
import { pokemonAPI } from '../api/pokemonAPI';
import { PokemonPaginated, SimplePokemon } from '../interfaces/PokemonIterface';
import { mapPokemonList } from '../utils/pokemon.utils';

export const usePokemonPaginated = () => {
  const [simplePokemons, setSimplePokemon] = useState<SimplePokemon[]>([]);
  const [isLoadingPokemons, setIsLoadingPokemons] = useState(true);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemonsInfo = async () => {
    setIsLoadingPokemons(true);
    const resp = await pokemonAPI.get<PokemonPaginated>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    const newSimplePokemons = mapPokemonList(resp.data.results);
    setSimplePokemon([...simplePokemons, ...newSimplePokemons]);
    setIsLoadingPokemons(false);
  };

  useEffect(() => {
    loadPokemonsInfo();
  }, []);

  return { simplePokemons, isLoadingPokemons, loadPokemonsInfo };
};
