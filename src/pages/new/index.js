import React, {useState, useRef, useEffect} from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import { styles } from './style';


export default function New() {

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [img, setImg] =useState(null);

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.getCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
 
  return (
   <View style={styles.container} >
        <Camera style={styles.camer} type={type} ref={ref => setCameraRef(ref)}  >

        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
          <Button
            title="Capture"
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync();
                console.log(photo);
                setImg(photo);
              }
            }}
          />
        </View>


        </Camera>    
          <TouchableOpacity 
            style={styles.button} 
            onPress={toggleCameraType}
          >
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        <Text>PAGINA 3</Text>
        <Image
          style={{width: '30%', height: '30%'}}
          source={img}
        />
   </View>
  );
}
