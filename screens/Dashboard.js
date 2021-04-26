
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import appColors from '../appColors'
import DashboardButton from '../components/DashboardButton'
import Screen from '../components/Screen'
import * as SecureStore from 'expo-secure-store'


const Dashboard = ( { navigation, route } ) => {
    const userDetails = route.params


    const goToMyBookings = () => {
        navigation.navigate( 'My Bookings' )
    }
    const goToLocalSitters = () => {
        navigation.navigate( 'Local Sitters' )
    }
    const goToUserProfile = () => {
        navigation.navigate( 'User Profile', userDetails )
    }
    const goToBubbleInfo = () => {
        Alert.alert( 'Bubble', 'This would show more info about bubble, or redirect to the website "About" page.' )
    }

    const signOut = async () => {
        await SecureStore.deleteItemAsync( 'userToken' )
        navigation.popToTop()
    }
    return (
        <Screen>
            <View style={ styles.header }>
                <Text style={ styles.headerTxt }>
                    Hi { userDetails.firstName || 'bunny' }!
            </Text>

                <Image style={ styles.img } source={ require( '../assets/janet.png' ) } />
            </View>
            <Text style={ styles.pageHeading }>Dashboard</Text>
            <View style={ styles.row }>
                <DashboardButton text='My Bookings' backgroundColor={ appColors.green } icon='calendar-alt' onPress={ goToMyBookings } />
                <DashboardButton text='Local Sitters' backgroundColor={ appColors.green } icon='users' onPress={ goToLocalSitters } />
            </View>
            <View style={ styles.row }>
                <DashboardButton text='My Profile' icon='address-card' onPress={ goToUserProfile } />
                <DashboardButton text='About Bubble' icon='question-circle' onPress={ goToBubbleInfo } />
            </View>
            <TouchableOpacity style={ styles.signOutBtn } onPress={ signOut }>
                <Text style={ styles.signOutTxt }>Sign Out</Text>
            </TouchableOpacity>


        </Screen>
    )
}

export default Dashboard

const styles = StyleSheet.create( {

    header: {
        backgroundColor: appColors.purple,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        padding: 35,
        marginBottom: 30,
        height: 125,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img: {
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 4,
        overflow: 'hidden',
        height: 80,
        width: 80
    },
    headerTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    pageHeading: {
        color: appColors.purple,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 50
    },
    signOutBtn: {
        padding: 15,
        backgroundColor: appColors.red,
        borderRadius: 15,
        width: '80%',
        alignSelf: 'center',
        marginTop: 30
    },
    signOutTxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'

    }

} )
