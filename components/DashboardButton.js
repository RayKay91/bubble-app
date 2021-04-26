import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import appColors from '../appColors'

const DashboardButton = ( { backgroundColor = appColors.purple, icon, text, ...otherProps } ) => {
    return (
        <TouchableOpacity style={ [ styles.container, { backgroundColor } ] } { ...otherProps }>
            <FontAwesome5 name={ icon } size={ 26 } color="white" />
            <Text style={ styles.text }>{ text }</Text>
        </TouchableOpacity>
    )
}

export default DashboardButton

const styles = StyleSheet.create( {
    container: {
        borderRadius: 37,
        height: 140,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    }
} )
