import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, FlatList, Alert } from 'react-native'
import Screen from '../components/Screen'
import Sitter from '../components/Sitter'
import Loading from '../screens/Loading'
import * as SecureStore from 'expo-secure-store'
const LocalSitters = ( { navigation } ) => {
    const [ sitters, setSitters ] = useState( '' )
    const [ isLoading, setIsLoading ] = useState( true )


    useEffect( () => {

        SecureStore.getItemAsync( 'userToken' ).then( token => {
            axios( {
                method: 'get',
                url: 'http://api-staging.joinbubble.co.uk/api/search',
                headers: {
                    Authorization: `Bearer ${ token }`
                }

            } ).then( resp => {

                setSitters( resp.data )
                setIsLoading( false )
            } ).catch( async ( err ) => {
                console.log( err )
                await Alert.alert( 'Oops! Something went wrong', 'Check your internet connection or try again later.' )
                navigation.goBack()
            }
            )
        } )


    }, [] )

    if ( isLoading ) return <Loading />
    return (
        <Screen screenStyles={ { marginTop: 20 } }>
            {sitters && <FlatList
                data={ sitters }
                renderItem={ ( { item, index } ) => ( <TouchableOpacity key={ index } onPress={ () => navigation.navigate( 'Sitter Profile', item ) }>
                    <Sitter rate={ '£' + item.hourlyRate + '/hr' } name={ item.fullName } rating={ item.ratingPercentage } distanceInKm={ item.distanceInKm } />
                </TouchableOpacity> ) }
            /> }
        </Screen>
    )
}

export default LocalSitters

