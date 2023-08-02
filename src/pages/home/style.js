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
        justifyContent:'center',
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
        fontWeight: '500',
        marginBottom: 2,
    },
    line:{
        backgroundColor: 'white',
        width: 32,
        height: 2,
        alignSelf: 'center'
    }
    
})
