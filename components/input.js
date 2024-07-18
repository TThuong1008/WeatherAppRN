import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {stylesInput} from './styles';

export default function Input({ city, setCity, fetchWeather }) {
    return (
      <View style={stylesInput.inputContainer}>
        <TextInput
          style={stylesInput.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
        <TouchableOpacity style={stylesInput.button} onPress={fetchWeather}>
          <Icon name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }



