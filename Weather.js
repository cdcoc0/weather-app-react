import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";
//https://docs.expo.io/guides/icons/#expovector-icons

const weatherOptions = {
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#1FA2FF", "#12D8FA", "#A6FFCB"],
        title: "Sunny",
        subtitle: "How about a picnic today?",
    },

    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#1e130c", "#9a8478"],
        title: "Thunder & Lightning",
        subtitle: "Just chill inside the house.",
    },

    Drizzle: {
        iconName:"weather-partly-rainy", 
        gradient: ["#DAD299", "#B0DAB9"],
        title: "Rain drops",
        subtitle: "It's OK. Gonna be fine.",
    },

    Rain: {
        iconName: "weather-rainy", 
        gradient: ["#525252", "#3d72b4"],
        title: "Rainy",
        subtitle: "Don't forget your umbrella!",
    },

    Snow: {
        iconName: "snowflake", 
        gradient: ["#DAE2F8", "#D6A4A4"],
        title: "Snowy",
        subtitle: "Let's make a snowman!",
    },

    Atmosphere: {
        iconName: "weather-fog", 
        gradient: ["#544a7d", "#ffd452"],
        title: "Dusts outside",
        subtitle: "Facial mask is highly recommended.",
    },

    Clouds: {
        iconName: "cloud", 
        gradient: ["#aa4b6b", "#6b6b83", "#3b8d99"],
        title: "Cloudy",
        subtitle: "The gray world makes us gloomy.",
    }
};

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
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },

    textContainer: {
        paddingHorizontal: 40, 
        alignItems: "flex-start", 
        justifyContent: "center", 
        flex: 1
    }, 
    
    title: {
        color: "white",
        fontSize: 40,
        marginBottom: 10,
        textAlign: "left"
    },

    subtitle: {
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
})