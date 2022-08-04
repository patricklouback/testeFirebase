import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function Tela2() {
    const [imagem, setImagem] = useState(null)

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        console.log(pickerResult.uri);
        setImagem(pickerResult.uri);
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>

            <Image
                style={styles.imagem}
                source={{ uri: imagem}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    /* Other styles hidden to keep the example brief... */
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    instructions: {
        fontSize: 15
    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'green',
        marginTop: 50,
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    },
    imagem: {
        width: 200,
        height: 250,
        marginTop: 50,
        borderRadius: 10,
    }
});