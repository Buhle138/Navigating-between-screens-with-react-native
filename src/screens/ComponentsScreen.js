import react from "react";
import { Text, StyleSheet } from "react-native/";

const ComponentsScreen = () => {

    return (
        <Text style = {styles.textStyle}>Buhle is the guy</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;