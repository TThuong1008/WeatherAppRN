import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import axios from 'axios';
import { stylesApp } from '../components/styles';
import Input from '../components/input';
import Body from '../components/body';

const API_KEY = '12e0e79cd796621c4d11c7a3fdc910fa';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState(require('../assets/day.png'));
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      setError(null); // Reset error message
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      const hour = new Date(response.data.dt * 1000).getHours();
      if (hour >= 6 && hour < 18) {
        setBackground(require('../assets/day.png'));
      } else {
        setBackground(require('../assets/night.png'));
      }
    } catch (error) {
      setError("! Invalid city name. Please try again.");
      console.error(error);
    }
  };

  return (
    <View style={stylesApp.container}>
      <ImageBackground source={background} style={stylesApp.background}>
        <Input city={city} setCity={setCity} fetchWeather={fetchWeather} />
        {error && <Text style={stylesApp.error}>{error}</Text>}
        <Body weather={weather} />
      </ImageBackground>
    </View>
  );
}
