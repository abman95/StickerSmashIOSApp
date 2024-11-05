import { StyleSheet, View, Pressable, Text } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

type Props = {
    label: string;
    theme?: "primary";
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme === "primary") {
    return (
        <>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome name="picture-o" size={20} color="#25292e" style={ styles.buttonIcon }/>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        </>
    )
} else {
    return (
        <>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        </>
    )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 20,
        alignItems: "center",
    },
    button: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        borderColor: "white", // Ein gültiger Farbcode (hier "white")
        borderWidth: 1,       // Damit die Rahmenfarbe angezeigt wird
        padding: 10,
        borderRadius: 10,
    },
    buttonLabel: {
        color: 'white',       // Beispiel: gültige Farbe (z. B. 'black' statt 'b')
        fontSize: 20,          // Angabe ohne 'vw' - in React Native sind px-ähnliche Werte üblich
    },
    buttonIcon: {
        color: 'white',
    },
})