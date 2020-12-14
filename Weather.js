import React from "react";
import {StyleSheet, Text, View} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
//https://docs.expo.io/guides/icons/#expovector-icons

export default function Weather({temp, condition}) {
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="weather-lightning-rainy" size={96}></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}</Text>
            <Text>{condition}</Text>
        </View>
        <View style={styles.halfContainer}>
        </View>
    </View>
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
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})