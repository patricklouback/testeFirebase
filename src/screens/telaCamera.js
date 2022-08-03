import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, SafeAreaView } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Camera, CameraType } from 'expo-camera';

export function TelaCamera({ navigation }) {

  const camRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);

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

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef} pictureSize={'350x531'}>
      </Camera>

        <View style={styles.buttonsView}>
        <MaterialCommunityIcons name='lightning-bolt-circle' size={50} color='#1E1E1E' />
        <MaterialCommunityIcons name='close-circle' size={50} color='#1E1E1E' />
        </View>

        <View style={styles.documentView}>

          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={styles.documentTopLeft}></View>
          <View style={styles.documentTopRight}></View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={styles.documentBottomLeft}></View>
          <View style={styles.documentBottomRight}></View>
          </View>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={takePicture}>
        </TouchableOpacity>
      {capturedPhoto &&
        <Modal
          animationType='slide'
          transparent={false}
          visible={open}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <TouchableOpacity style={{ margin: 10 }} onPress={() => { setOpen(false) }}>
              <MaterialIcons name='close' size={50} color='#F71B64' />
            </TouchableOpacity>
            <Image
              style={{ width: 350, height: 531, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />
            <Text style={{fontSize: 15}}>
              Verifique se a foto está legível!
            </Text>
          </View>

        </Modal>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '155%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsView: {
    width: '100%',
    height: 50,
    flexDirection: 'row', 
    alignItems: 'center',
    position: 'absolute',
    top: '7%',
    paddingLeft: '7%',
    paddingRight: '7%',
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    elevation: 10,
    position: 'absolute',
    bottom: '6%',
    left: '40%'
  },
  documentView:{
    width: 350,
    height: 531,
    position: 'absolute',
    top: '19%',
    left: '7.5%',
    justifyContent:'space-between',
  },
  documentTopLeft:{
    width: 52,
    height: 66,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#F71B64',
  },
  documentTopRight:{
    width: 52,
    height: 66,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#F71B64',
  },
  documentBottomLeft:{
    width: 52,
    height: 66,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#F71B64',
  },
  documentBottomRight:{
    width: 52,
    height: 66,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#F71B64',
  },
});
