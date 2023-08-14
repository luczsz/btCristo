import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';


export const  styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.primary,
        flex: 1,
    },

    header:{
        marginTop: 31,

        height: 90,

        justifyContent: 'center',
        padding: 14,
        
        borderWidth: 1,
        borderBottomColor: theme.colors.secondary50,
    },

    content:{
        flex: 1,

        alignItems: 'center',
        paddingTop: 20,
    },

    buttons:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    backButton:{
        backgroundColor: 'white',
        width: 50,
        height: 50,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },

    inputs:{
        width: '95%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',

        paddingLeft: 14,
        paddingRight: 14,

        marginTop: 5,
        marginBottom: 5,

        borderWidth: 2,
        borderColor: theme.colors.secondary50,
        borderRadius: 12,
    },

    submitButton:{
        backgroundColor: theme.colors.secondary50,
        height: 60,
        width: '80%',

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 8,
    },
    textSubmit:{
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'

    },




})
