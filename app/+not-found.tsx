import { View, StyleSheet } from "react-native";
import {Link, Stack} from "expo-router";

export default function NotFoundScreen() {
    return (
        <View style={ styles.container }>
            <Link href={"/"} style={ styles.button }>Go back to Home screen!</Link>
        </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: '10vw',
        color: 'white',
    },
});