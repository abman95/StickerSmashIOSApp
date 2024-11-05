import {View, StyleSheet, Platform} from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import {useEffect, useRef, useState} from "react";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import * as MediaLibrary from "expo-media-library";
import  { captureRef } from "react-native-view-shot";
import {Image} from "expo-image";
import domtoimage from "dom-to-image";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
    const imageRef = useRef(null);
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

    const  [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const  [showOptions, setShowAppOptions] = useState<boolean>(false);
    const  [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const  [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (!permissionResponse?.granted) {
            requestPermission();
        }
    }, []);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
            console.log(result);
        } else {
            alert("Du hast kein Bild ausgewählt!");
        }
    }

    const onReset = () => {
        setShowAppOptions(false);
    }

    const onModalClose = () => {
        setIsModalVisible(false);
    }

    const onAddSticker = () => {
        setIsModalVisible(true);
    }

    const onSaveImageAsync = async () => {
        if (Platform.OS === "web") {
            try {
                // @ts-ignore
                const dataURL = await domtoimage.toJpeg(imageRef.current, {
                    quality: 0.95,

                });
                let link = document.createElement("a");
                link.download = "sticker-smash.jpeg";
                link.href = dataURL;
                link.click();
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                const  localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1,
                });

                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) {
                    alert("Saved!");
                }
            }  catch (error) {
                console.log(error);
            }
        }
    }

  return (
      <>
    <View style={ styles.container}>
        <View ref={imageRef}>
            <ImageViewer imgSource={selectedImage || PlaceholderImage}/>
            {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
        </View>

        {showOptions ? (
            <View style={ styles.optionsContainer}>
                <View style={ styles.optionsRow }>
                    <IconButton icon="refresh" label="Reset" onPress={onReset}/>
                    <CircleButton onPress={onAddSticker}/>
                    <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
                </View>
                </View>
        ) :
        <View style={ styles.footerContainer }>
            <Button label={"Wähle ein Bild"} theme={"primary"} onPress={pickImageAsync}></Button>
            <Button label={"Benutze dieses Foto"} onPress={() => setShowAppOptions(true)}></Button>
        </View>
        }
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}></EmojiList>
        </EmojiPicker>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        backgroundColor: 'black',
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    footerContainer: {
        marginTop: 30,
        flex: 2/4,
        alignItems: "center",
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80,
    },
    optionsRow: {
        alignItems: "center",
        flexDirection: "row",
    }
});