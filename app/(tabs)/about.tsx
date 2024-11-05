import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={ styles.container}>
            <Text style={ styles.text }>About Sticker Smash</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontSize: '20vw'
    }
});