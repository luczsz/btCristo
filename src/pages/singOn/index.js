import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';


export default function SingOn() {

  const navigation = useNavigation();

  return (
   <KeyboardAvoidingView style={ styles.container}>
        <View style={styles.header}>
           <TouchableOpacity 
            style={styles.backButton}
            activeOpacity={0.6} 
            onPress={ () => navigation.goBack()}
           >
              <Feather name='arrow-left' size={34} color={ theme.colors.secondary50} />
           </TouchableOpacity>
        </View>
        
        <View style={styles.content}>
            <View style={styles.inputs}>
              <Feather
                  name='user'
                  size={30}
                  color={ theme.colors.secondary40 }
                  style={{ marginRight: 12, }}
                />
                <TextInput      
                  style={{ width: '85%', height: 50, color: 'white'  }}
                  placeholder='username'
                  autoCapitalize='none'
                  placeholderTextColor={'white'}
                  autoCorrect={false}
                />
            </View>
            
            <View style={styles.inputs}>
              <Feather
                  name='mail'
                  size={30}
                  color={ theme.colors.secondary40 }
                  style={{ marginRight: 12, }}
                />
                <TextInput      
                  style={{ width: '85%', height: 50, color: 'white',  }}
                  placeholder='Email'
                  placeholderTextColor={'white'}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
            </View>
            
            <View style={styles.inputs}>
              <Feather
                  name='key'
                  size={30}
                  color={ theme.colors.secondary40 }
                  style={{ marginRight: 12, }}
                />
                <TextInput      
                  style={{ width: '85%', height: 50, color: 'white'  }}
                  placeholder='Senha'
                  placeholderTextColor={'white'}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
            </View>
        </View>
        
        <View style={styles.buttons}>

           <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
           >
              <Text style={styles.textSubmit}>
                C A D A S T R A R
              </Text>
           </TouchableOpacity>


           <View style={{ flexDirection: 'row' }} > 
              <Text
                style={{  color: theme.colors.secondary40, fontWeight: 'bold', marginLeft: 10, }}
              >
                JÁ TEM UMA CONTA? 
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
              >
                <Text
                  style={{  color: theme.colors.secondary50, fontWeight: 'bold', marginLeft: 10, }}
                >E N T R E</Text>
              </TouchableOpacity>
           </View>
        </View>
   </KeyboardAvoidingView>
  );
}
