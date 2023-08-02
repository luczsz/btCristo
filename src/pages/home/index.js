import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';

import { styles } from './style';

export default function Home() {
 return (
   <View style={styles.container} >

        <View style={styles.labs} >

          <TouchableOpacity>
              <Text style={styles.labsText} >SEGUINDO</Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={styles.labsText} >PRA VOCÊ</Text>
              <View style={styles.line} ></View>
          </TouchableOpacity>

        </View>
    
   </View>
  );
}
