import {Dimensions, StyleSheet} from "react-native";
import {Image} from "expo-image";

type Props = {
    imgSource: string;
}

export default function ImageViewer({ imgSource }: Props) {
    return <Image source={imgSource} style={styles.image} />
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width: width * 0.7, // 80% der Bildschirmbreite
        height: height * 0.45, // 40% der Bildschirmhöhe
        borderRadius: 18,
        objectFit: "cover",
    },
});