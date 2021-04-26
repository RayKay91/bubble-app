import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import Loading from './Loading'
import Screen from '../components/Screen'
import Booking from '../components/Booking'
import appColors from '../appColors'
const Bookings = ( { navigation } ) => {

    const [ isLoading, setIsLoading ] = useState( true )
    const [ bookings, setBookings ] = useState( null )

    useEffect( () => {
        SecureStore.getItemAsync( 'userToken' ).then( token => {

            axios( {
                method: 'get',
                url: 'http://api-staging.joinbubble.co.uk/api/booking/activesummary',
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            } ).then( resp => {
                setBookings( resp.data )
                setIsLoading( false )
            } )
                .catch( err => Alert.alert( 'Something went wrong.', 'Check your internet connection or try again later.' ) )

        } ).catch( err => Alert.alert( 'Error fetching user token' ) )
    }, [] )

    if ( isLoading ) return <Loading />

    return (
        <Screen>
            <ScrollView>
                <View style={ styles.container }>
                    <Text style={ [ styles.heading, { color: appColors.yellow } ] }>Requested Bookings</Text>
                    { bookings.requestedBookings.length > 0 ? ( <View>{ bookings.requestedBookings.map( reqBooking => <Booking /> ) }</View> ) : <Text style={ { textAlign: 'center' } }>None at present.</Text> }

                    <Text style={ [ styles.heading, { color: appColors.green } ] }>Confirmed Bookings</Text>
                </View>
                { bookings && bookings.confirmedBookings.map( ( booking, i ) => (
                    <TouchableOpacity key={ i } onPress={ () => navigation.navigate( 'Booking Details', booking ) }>
                        <Booking name={ booking.otherUserFullName } date={ booking.scheduledStart } duration={ booking.scheduledDuration } />
                    </TouchableOpacity>
                ) ) }
            </ScrollView>
        </Screen>
    )
}

export default Bookings

const styles = StyleSheet.create( {
    container: {
        alignSelf: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 15
    },
    text: {

    }
} )
