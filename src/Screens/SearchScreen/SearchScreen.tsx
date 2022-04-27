import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard.component';
import { SearchInput } from '../../components/SearchInput/SearchInput.component';
import { usePokemonSearch } from '../../hooks/usePokemonSearch';
import { SimplePokemon } from '../../interfaces/PokemonIterface';
import { globalStyles } from '../../Theme/appTheme';
import { SearchScreenStyles } from './SearchScreen.styled';

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }
    const filtered = simplePokemonList.filter((pokemon: SimplePokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase()),
    );
    setPokemonFiltered(filtered);
  }, [term]);

  return (
    <>
      {isFetching ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator size={50} color="grey " />
          <Text>Cargando...</Text>
        </View>
      ) : (
        <SafeAreaView
          style={{ ...SearchScreenStyles.container, marginTop: top + 20 }}>
          <SearchInput onDebounce={value => setTerm(value)} />
          <FlatList
            data={pokemonFiltered}
            keyExtractor={pokemon => pokemon.id}
            numColumns={2}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            ListHeaderComponent={
              <Text
                style={[
                  globalStyles.globalMargin,
                  globalStyles.title,
                  { marginTop: top, marginBottom: 10 },
                ]}>
                {term}
              </Text>
            }
          />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
