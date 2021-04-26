import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import Loading from '../screens/Loading'
import Screen from '../components/Screen'
import appColors from '../appColors'
const BookingDetails = ( { route } ) => {
    const bookingInfo = route.params

    const { id } = bookingInfo

    const [ isLoading, setIsLoading ] = useState( true )
    const [ bookingDetails, setBookingDetails ] = useState()

    useEffect( () => {
        SecureStore.getItemAsync( 'userToken' ).then( token => {
            axios( {
                method: 'get',
                url: `http://api-staging.joinbubble.co.uk/api/booking/${ id }`,
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            } ).then( resp => {
                setBookingDetails( resp.data )
                setIsLoading( false )
            } ).catch( err => Alert.alert( 'Something went wrong.', 'Check your internet connection or try again later.' ) )
        } ).catch( err => Alert.alert( 'Something went wrong fetching the token' ) )
    }, [] )


    const formatDateTime = ( datetime ) => {
        const d = new Date( datetime )
        const time = d.getUTCHours() + ':' + d.getUTCMinutes()
        const date = d.toDateString()
        return { time, date }
    }

    if ( isLoading ) return <Loading />

    return (
        <Screen>
            <View style={ styles.container }>
                <Text style={ styles.heading }>Name</Text>
                <Text style={ styles.text }>{ bookingDetails.bookedSitter.fullName }</Text>
                <Text style={ styles.heading }>Hourly Rate</Text>
                <Text style={ styles.text }>{ bookingDetails.bookedSitter.hourlyRate }</Text>
                <Text style={ styles.heading }>Contact</Text>
                <Text style={ styles.text }>{ bookingDetails.bookedSitter.mobileNumber }</Text>
                <Text style={ styles.heading }>Booking Date</Text>
                <Text style={ styles.text }>{ formatDateTime( bookingDetails.scheduledStart ).date } { formatDateTime( bookingDetails.scheduledStart ).time }</Text>
                <Text style={ styles.heading }>Booking Duration</Text>
                <Text style={ styles.text }>{ bookingDetails.scheduledDuration } hours</Text>
                { bookingDetails.sitterNotes ? ( <><Text style={ styles.heading }>Notes from the sitter</Text>
                    <Text style={ styles.text }>{ bookingDetails.sitterNotes }</Text></> ) : null }
            </View>
        </Screen>
    )
}

export default BookingDetails

const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'white',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
        width: '90%',
        alignSelf: 'center'

    },
    heading: {
        color: appColors.purple,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10
    },
    text: {
        marginLeft: 20,
        marginBottom: 15,
        color: appColors.onyx,
        fontSize: 18
    },

} )
