import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../../hooks/useDebounceValue';
import { SearchInputStyles } from './SearchInput.styled';

interface Props {
  onDebounce: (value: string) => void;
}

export const SearchInput = ({ onDebounce }: Props) => {
  const [textValue, setTextValue] = useState('');
  const debounceValue = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debounceValue);
  }, [debounceValue]);

  return (
    <View style={SearchInputStyles.container}>
      <View style={SearchInputStyles.textBackground}>
        <TextInput
          placeholder="Busqueda"
          style={SearchInputStyles.textInput}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color={'grey'} size={20} />
      </View>
    </View>
  );
};
