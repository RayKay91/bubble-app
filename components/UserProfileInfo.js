import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import appColors from '../appColors'


const UserProfileInfo = ( { fieldTitle, children, } ) => {


    return (
        <View style={ styles.container }>
            <Text style={ styles.fieldTitle }>{ fieldTitle }</Text>
            <View style={ styles.userInfo }>
                <Text style={ styles.fieldDetail }>{ children }</Text>
            </View>
        </View>
    )
}

export default UserProfileInfo

const styles = StyleSheet.create( {
    container: {
        alignSelf: 'center',
        width: '85%',

    },
    fieldTitle: {
        color: appColors.onyx,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 8,
        marginBottom: 8
    },
    fieldDetail: {
        fontSize: 18,
        color: appColors.onyx
    },
    userInfo: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.15,
        shadowRadius: 14.78,

        elevation: 22,
        textAlign: 'left'
    }

} )
