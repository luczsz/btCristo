import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({ size }) {
 return (
   <View style={styles.container} >
        <View style={styles.inner} >
            <Entypo name='plus' size={size} color="#000" />
        </View>
   </View>
  );
}
