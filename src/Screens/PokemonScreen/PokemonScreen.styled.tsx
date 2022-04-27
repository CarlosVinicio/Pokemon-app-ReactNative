import { StyleSheet } from 'react-native';

export const PokemonDetailStyles = StyleSheet.create({
  container: {
    height: 370,
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    fontSize: 25,
    left: 20,
    color: 'white',
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -80,
    left: 70,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 50,
    left: 35,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
