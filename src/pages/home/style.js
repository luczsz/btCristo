import { StyleSheet } from 'react-native';

import { StatusBar, Platform } from 'react-native';
//import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },

    labs:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent:'space-around',
        gap: 8,
        position: 'absolute',
        top: 6,
        left: 0,
        right: 0,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight+5 : 55,
        zIndex: 99,
    },
    labsText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
        textShadowColor: 'rgba(0,0,0, 0.60)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8,
    },
    line:{
        backgroundColor: 'white',
        width: 32,
        height: 2,
        alignSelf: 'center'
    }
    
})
