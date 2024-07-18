import React from 'react';
import { View, Text, Image } from 'react-native';
import { stylesBody } from './styles';

export default function Body({ weather }) {
  return (
    weather && (
      <View style={stylesBody.weatherContainer}>
        <Text style={stylesBody.city}>{weather.name}</Text>
        <Text style={stylesBody.temperature}>{weather.main.temp}°C</Text>
        <Image
          style={stylesBody.icon}
          source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
        />
        <Text style={stylesBody.description}>{weather.weather[0].description}</Text>
      </View>
    )
  );
}
