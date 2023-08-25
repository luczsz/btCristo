import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function SingIn() {

  const navigation = useNavigation();

  return (
   <KeyboardAvoidingView style={styles.container} >

        <View style={styles.content} > 
            <Text style={styles.title} >
                Seja bem vindo de volta.
            </Text>

            <View style={styles.input} >
                <Feather name='user' size={35} color={'#f5f5f5'} />
                <TextInput
                  placeholderTextColor={'#FFF'}
                  placeholder='Username'
                  style={styles.inputs}
                  autoCorrect={false}
                  autoCapitalize='none'
                />
            </View>

            <View style={styles.input} >
                <Feather name='key' size={35} color={'#f5f5f5'} />
                <TextInput
                  placeholderTextColor={'#FFF'}
                  placeholder='Senha'
                  style={styles.inputs}
                  autoCorrect={false}
                  autoCapitalize='none'
                />
            </View>
            
            <TouchableOpacity style={styles.bntFogte} >
              <Text style={{color:'white', fontWeight: 'bold'}}>Esqueci minha senha</Text>
            </TouchableOpacity>

        </View>

        
        <View style={styles.buttons} >

            <TouchableOpacity style={styles.submitBnt} >
              <Text style={styles.submitText}>E N T R A R</Text>
            </TouchableOpacity>

            <View style={styles.direc} >
              <Text style={{color:'white', fontWeight: 'bold', textTransform: 'uppercase'}}>ainda não tem conta?</Text>
                <TouchableOpacity
                  onPress={ () => navigation.navigate('SingOn')}
                >
                  <Text style={{color: theme.colors.secondary50, fontWeight: 'bold', textTransform: 'uppercase'}}>C A D A S T R E - S E</Text>
                </TouchableOpacity>
            </View>



        </View>
        
   </KeyboardAvoidingView>
  );
}
