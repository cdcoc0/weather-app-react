import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Text style={styles.text}>Getting the weather🌞</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
    },

    text: {
        color: "#2c3e50",
        fontSize: 30,
    }
})