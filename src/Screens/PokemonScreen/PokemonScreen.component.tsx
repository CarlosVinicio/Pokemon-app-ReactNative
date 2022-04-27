import React from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';
import { PokemonDetailStyles } from './PokemonScreen.styled';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../../components/FadeInImage';
import { usePokemonDetail } from '../../hooks/usePokemonDetail';
import { PokemonDetail } from '../../components/PokemonDetails/PokemonDetails.component';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {
  //mas props
}

export const PokemonScreen = (props: Props) => {
  const { route, navigation } = props;
  const { simplePokemon, color } = route.params;
  const { name, picture, id } = simplePokemon;
  const { top } = useSafeAreaInsets();
  const imagePokeBall = require('../../assets/pokebola-blanca.png');
  const { isLoading, pokemon } = usePokemonDetail(id);

  return (
    <View style={{ flex: 1 }}>
      <View style={[PokemonDetailStyles.container, { backgroundColor: color }]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-outline"
            color={'white'}
            size={30}
            style={{ ...PokemonDetailStyles.backButton, top: top }}
          />
        </TouchableOpacity>
        <Text style={{ ...PokemonDetailStyles.pokemonName, top: top + 30 }}>
          {name}
        </Text>
        <Image source={imagePokeBall} style={PokemonDetailStyles.pokeball} />
        <FadeInImage uri={picture} style={PokemonDetailStyles.pokemonImage} />
      </View>
      {isLoading ? (
        <View style={PokemonDetailStyles.activityIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetail pokemon={pokemon} />
      )}
    </View>
  );
};
