import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { theme } from '../../global/theme';

import { Feather } from '@expo/vector-icons';


export default function Splash() {
 return (
   <View style={styles.container} >

        <View style={styles.img} >
          <Image
            style={styles.image}
            source={ require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.bnts} >
            <TouchableOpacity 
              style={styles.nextBnt}
              activeOpacity={0.6} 
            >
                <Feather
                  name='arrow-right'
                  size={35}
                  color={theme.colors.secondary50}
                />
            </TouchableOpacity>
        </View>
        
   </View>
  );
}
