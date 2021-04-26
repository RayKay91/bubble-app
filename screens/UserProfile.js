import axios from 'axios'
import React from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native'
import appColors from '../appColors'
import Screen from '../components/Screen'
import UserProfileInfo from '../components/UserProfileInfo'
import capitalise from '../utils/capitalise.js'

const UserProfile = ( { route } ) => {

    const userDetails = route.params

    return (
        <Screen>
            <ScrollView style={ styles.scrollView }>
                <Image source={ require( '../assets/janet.png' ) } style={ styles.img } />
                <UserProfileInfo fieldTitle={ 'Name' }>
                    { userDetails.fullName }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'Email' }>
                    { userDetails.email }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'Mobile' }>
                    { userDetails.mobileNumber }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'Bio' }>
                    { userDetails.biography }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'Address' }>
                    { `${ userDetails.address.houseNo.toString() }\n${ userDetails.address.street }\n${ capitalise( userDetails.address.town ) }\n${ userDetails.address.postcode }` }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'Bubble Plus' }>
                    { userDetails.premiumUser ? 'Yes' : 'No' }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'Household Allergies' }>
                    { userDetails.allergies.length > 0 ? userDetails.allergies.join( ', ' ) : 'None' }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'Children' }>
                    { userDetails.children.length }
                </UserProfileInfo>
                <UserProfileInfo fieldTitle={ 'NHS Worker' }>
                    { userDetails.nhsWorker ? 'Yes' : 'No' }
                </UserProfileInfo>
            </ScrollView>
        </Screen>
    )
}

export default UserProfile

const styles = StyleSheet.create( {
    img: {
        borderRadius: 100,
        borderColor: appColors.purple,
        borderWidth: 5,
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: 30
    }
} )
