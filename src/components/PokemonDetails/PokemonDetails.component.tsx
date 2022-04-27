import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonDetails, Sprites } from '../../interfaces/PokemonIterface';
import { wrapperStyled } from './PokemonDetails.styled';
import { FadeInImage } from '../FadeInImage';

interface Props {
  pokemon: PokemonDetails;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  const { types, weight, sprites, abilities } = pokemon;

  const renderItem = (item: Sprites) => {
    //console.log(item);
    return (
      <View style={wrapperStyled.spritesContainer}>
        {item.back_default && (
          <FadeInImage uri={item.back_default} style={wrapperStyled.sprites} />
        )}
        {item.back_female && (
          <FadeInImage uri={item.back_female} style={wrapperStyled.sprites} />
        )}
        {item.back_shiny && (
          <FadeInImage uri={item.back_shiny} style={wrapperStyled.sprites} />
        )}
        {item.back_shiny_female && (
          <FadeInImage
            uri={item.back_shiny_female}
            style={wrapperStyled.sprites}
          />
        )}
        {item.front_default && (
          <FadeInImage uri={item.front_default} style={wrapperStyled.sprites} />
        )}
        {item.front_female && (
          <FadeInImage uri={item.front_female} style={wrapperStyled.sprites} />
        )}
        {item.front_shiny && (
          <FadeInImage uri={item.front_shiny} style={wrapperStyled.sprites} />
        )}
        {item.front_shiny_female && (
          <FadeInImage
            uri={item.front_shiny_female}
            style={wrapperStyled.sprites}
          />
        )}
      </View>
    );
  };

  const renderAbilities = () => {
    return abilities.map(abilitie => {
      return <Text key={abilitie.ability.name}> {abilitie.ability.name}</Text>;
    });
  };

  return (
    <ScrollView style={wrapperStyled.scrollView}>
      <View style={{ ...wrapperStyled.container, marginTop: 370 }}>
        <Text style={wrapperStyled.title}>Tipos</Text>
        <View style={wrapperStyled.types}>
          {types &&
            types.map(({ type }) => (
              <Text key={type.name} style={wrapperStyled.typesName}>
                {type.name}
              </Text>
            ))}
        </View>
        {/* Sprites */}
      </View>
      <View style={wrapperStyled.container}>
        <Text style={wrapperStyled.title}>Peso</Text>
        <Text>{weight} Kg</Text>
      </View>
      <View style={wrapperStyled.container}>
        <Text style={wrapperStyled.title}>Sprites</Text>
      </View>
      {sprites && (
        <FlatList
          data={[sprites]}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
        />
      )}
      <View style={wrapperStyled.container}>
        <Text style={wrapperStyled.title}>Base abilities</Text>
        {abilities && renderAbilities()}
      </View>
    </ScrollView>
  );
};
