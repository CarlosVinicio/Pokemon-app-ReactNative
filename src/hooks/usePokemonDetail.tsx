import { useEffect, useState } from 'react';
import { pokemonAPI } from '../api/pokemonAPI';
import { PokemonDetails } from '../interfaces/PokemonIterface';

export const usePokemonDetail = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<PokemonDetails>({} as PokemonDetails);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const response = await pokemonAPI.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}/`,
    );
    setIsLoading(false);
    setPokemon(response.data);
  };

  return {
    isLoading,
    pokemon,
  };
};
