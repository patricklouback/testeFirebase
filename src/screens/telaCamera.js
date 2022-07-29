import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Camera, CameraType } from 'expo-camera';

export function TelaCamera({navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              
            }}>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginRight: 30, elevation: 10}}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <MaterialIcons name="flip-camera-ios" size={35} color="#FFF" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '90%',
    height: '58%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  buttonContainer: {
    width: '90%',
    height: 80,
    flexDirection: 'row',
    margin: 20,
    marginBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 70,
    backgroundColor: '#FFF',
    elevation: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
