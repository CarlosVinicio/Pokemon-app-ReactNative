import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SimplePokemon } from '../../interfaces/PokemonIterface';
import { cardStyles } from './PokemonCard.styled';
import { FadeInImage } from '../FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

const widthWindow = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = (props: Props) => {
  const { name, id, picture } = props.pokemon;
  const pokeImage = require('../../assets/pokebola-blanca.png');
  const [bgColor, setBGcolor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }
    getBackGroundColor();
    return () => {
      isMounted.current = false;
    };
  }, []);

  const getBackGroundColor = async () => {
    const result = await ImageColors.getColors(picture, {
      fallback: '#228B22',
      cache: true,
      key: id,
    });
    const backGroundColor =
      result.platform === 'ios' ? result.background : result.dominant;
    setBGcolor(backGroundColor || 'grey');
  };

  const handlePressCard = () => {
    navigation.navigate('PokemonScreen', {
      simplePokemon: props.pokemon,
      color: bgColor,
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePressCard}>
      <View
        style={[
          cardStyles.cardContainer,
          { width: widthWindow * 0.4, backgroundColor: bgColor },
        ]}>
        <View>
          <Text style={cardStyles.name}>{name}</Text>
          <Text style={cardStyles.name}>#{id}</Text>
        </View>

        <View>
          <Image source={pokeImage} style={cardStyles.pokeImage} />
        </View>
        <View>
          <FadeInImage uri={picture} style={cardStyles.pokemonImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
