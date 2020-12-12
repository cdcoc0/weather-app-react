//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
      //sent to api, get weather
    } catch(error) {
      Alert.alert("Can't find you", "😅");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading} = this.state;
    return isLoading ? <Loading /> : null;
  }
}
