import { StyleSheet } from 'react-native';

import { StatusBar, Platform } from 'react-native';
//import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    infor:{
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8,
        bottom: 20,
    },

    name:{
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 4,
        textShadowColor: 'rgba(0,0,0, 0.60)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8,
    },
    description:{
        color: 'white',
        marginRight: 24,
        
        textShadowColor: 'rgba(0,0,0, 0.20)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8,
    },
    actions:{
        position: 'absolute',
        zIndex: 99,
        right: 8,
        bottom: 60,
        gap: 8,
    }
})
