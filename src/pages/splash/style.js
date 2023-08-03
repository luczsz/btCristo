import { StyleSheet } from 'react-native';

import { StatusBar, Platform } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    image:{
        width: 400,
        height: 400,
    },

    img:{
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: 'green',
    },
    bnts:{
        height: '30%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        
        paddingRight: 24,
    },

    nextBnt:{
        backgroundColor: theme.colors.secondary40,
        width: 60,
        height: 60,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    }
})
