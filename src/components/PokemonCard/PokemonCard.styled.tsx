import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titles: {
    display: 'flex',
    justifyContent: 'flex-start',
    color: 'yellow',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -100,
    right: -20,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    right: -30,
    top: -5,
  },
});
