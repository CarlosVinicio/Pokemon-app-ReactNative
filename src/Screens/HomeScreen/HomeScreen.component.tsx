import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../Theme/appTheme';
import { usePokemonPaginated } from '../../hooks/usePokemonPaginated';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard.component';

export const Home = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemons, isLoadingPokemons, loadPokemonsInfo } =
    usePokemonPaginated();

  return (
    <View>
      <Image
        source={require('../../assets/pokebola.png')}
        style={globalStyles.pokeBallBG}
      />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={simplePokemons}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemonsInfo}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={
            <Text
              style={[
                globalStyles.globalMargin,
                globalStyles.title,
                { marginTop: top, marginBottom: 10 },
              ]}>
              Pokemon{' '}
            </Text>
          }
          ListFooterComponent={
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color={'grey'}
            />
          }
        />
      </View>
    </View>
  );
};
