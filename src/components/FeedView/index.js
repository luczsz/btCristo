import React, {useRef, useState, useEffect} from 'react';
import { View, Text, Pressable, Dimensions, TouchableOpacity } from 'react-native';

import { Video } from 'expo-av';
import { styles } from './style';

import { Ionicons } from '@expo/vector-icons';

const { height: heightScreen } = Dimensions.get("screen");

export default function FeedView({data, currentVisibleItem}) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  function handlePlayer(){
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
  }

  useEffect( () => {
    if(currentVisibleItem?.id === data?.id){
      video.current?.playAsync();
    }else{
      video.current?.pauseAsync();

    }
  }, [currentVisibleItem]);

 return (
   <Pressable onPress={ handlePlayer } >

        <View style={styles.infor} >
            <Text style={styles.name} > {data.name} </Text>
            <Text numberOfLines={2} style={styles.description} > {data.description} </Text>
        </View>

        <View style={styles.actions} >
            <TouchableOpacity>
              <Ionicons name='heart' size={35} color={'white'} />
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Ionicons name='chatbubble-ellipses' size={35} color={'white'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name='bookmark' size={35} color={'white'} />
            </TouchableOpacity>
        </View>


        <Video
          ref={video}
          style={{ width: '100%', height: 810, }}
          source={{ uri: data?.video }}
          resizeMode="cover"
          shouldPlay={false}
          isMuted={false}
          isLooping
          onPlaybackStatusUpdate={ status => setStatus( () => status )}
        />
   </Pressable>
  );
}
