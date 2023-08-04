import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.primary,
        flex: 1,
    },

    content:{
        marginTop: 32,
        height: '95%',
        paddingLeft: 20,
        paddingTop: 22,
    },
    
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.secondary40,
        marginBottom: 10,
    },

    input:{
        width: '95%',
        height: '10%',
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

    inputs:{
        
        width: '80%',
        height:'70%',
        marginLeft: 10,
    },

    submitBnt:{
        backgroundColor: theme.colors.secondary50,
        marginTop: 20,
        width: '95%',

        padding: 10,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },

    submitText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.secondary40,
    },
    direc:{
        marginTop: 20,
        flexDirection: 'row',
        height: 50,
        
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    }

})
