import { StyleSheet } from 'react-native';

export const wrapperStyled = StyleSheet.create({
  scrollView: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  types: {
    flexDirection: 'row',
  },
  typesName: {
    fontSize: 15,
    marginRight: 10,
  },
  spritesContainer: {
    flexDirection: 'row',
  },
  sprites: {
    height: 80,
    width: 80,
  },
});
