import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import appColors from '../appColors'

const Booking = ( { name, date, duration } ) => {
    const formattedDate = ( date ) => {
        let [ formattedDate ] = date.split( 'T' )
        return formattedDate.split( '-' ).reverse().join( '/' )
    }
    let startTime = new Date( date )
    startTime = startTime.getUTCHours() + ':' + startTime.getUTCMinutes()
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>{ formattedDate( date ) } @ { startTime }</Text>
            <Text style={ styles.text }>{ duration + 'hrs' }</Text>
            <Text style={ styles.text }>{ name }</Text>
        </View>
    )
}

export default Booking

const styles = StyleSheet.create( {
    container: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 18,
        width: '80%',
        marginBottom: 15,
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
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: appColors.onyx
    }
} )
