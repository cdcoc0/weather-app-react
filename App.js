//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = "bae1076bc4c9ce19a1bd0aa7f04a7d96";

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0
  };

  getWeather = async(latitude, longitude) => {
    const { 
      data
     } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({isLoading: false, condition: data.weather[0].main, temp: data.main.temp})
  };
  
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      //console.log(response);
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //this.setState({isLoading: false});
      //sent to api, get weather
    } catch(error) {
      Alert.alert("Can't find you", "😅");
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.floor(temp)} condition={condition} />;
  };
}
