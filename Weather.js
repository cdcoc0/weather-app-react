import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";
//https://docs.expo.io/guides/icons/#expovector-icons

const weatherOptions ={
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#1FA2FF", "#12D8FA", "#A6FFCB"]

    },

    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#1e130c", "#9a8478"]
    },

    Drizzle: {
        iconName:"weather-partly-rainy", 
        gradient: ["#DAD299", "#B0DAB9"]
    },

    Rain: {
        iconName: "weather-rainy", 
        gradient: ["#525252", "#3d72b4"]
    },

    Snow: {
        iconName: "snowflake", 
        gradient: ["#DAE2F8", "#D6A4A4"]
    },

    Atmosphere: {
        iconName: "weather-fog", 
        gradient: ["#544a7d", "#ffd452"]
    },

    Clouds: {
        iconName: "cloud", 
        gradient: ["#aa4b6b", "#6b6b83", "#3b8d99"]
    }
}

export default function Weather({temp, condition}) {
    return (
    <LinearGradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
            name={weatherOptions[condition].iconName}
            size={96}
            color="white" />
            <Text style={styles.temp}>{temp}°</Text>
            <Text style={styles.condition}>{condition}</Text>
        </View>
        <View style={styles.halfContainer}>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },

    temp: {
        fontSize: 42,
        color: "white",
    },

    condition: {
        fontSize: 20,
        color: "white",
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})