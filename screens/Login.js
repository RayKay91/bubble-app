import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import Screen from '../components/Screen'
import AppLoginInput from '../components/AppLoginInput'
import appColors from '../appColors'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import Loading from './Loading'

const Login = ( { navigation } ) => {
    const [ isLoading, setIsLoading ] = useState( false )
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )

    const handleSignIn = async () => {
        try {

            setIsLoading( true )
            const token = await axios( {
                method: 'post',
                url: 'http://api-staging.joinbubble.co.uk/auth/local',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify( { email, password } )
            } )

            await SecureStore.setItemAsync( 'userToken', token.data.token )

        } catch ( error ) {
            console.log( error, 1 )
            setIsLoading( false )
            Alert.alert( 'Hmmm, looks like something went wrong.', 'You might want to double check your login details, or your internet connection.' )
        }

        try {


            const token = await SecureStore.getItemAsync( 'userToken' )

            const resp = await axios( {
                method: 'get',
                url: 'http://api-staging.joinbubble.co.uk/api/user',
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            } )

            const userDetails = resp.data
            setIsLoading( false )
            navigation.navigate( 'Dashboard', userDetails )


        }
        catch ( error ) {
            setIsLoading( false )
            console.log( error, 1 )
            Alert.alert( 'Oops!', 'It looks like something went wrong. Check your internet connection or try again later' )
        }
    }

    const handleSignUp = () => {
        Alert.alert( 'Sign Up', 'This would lead to the user sign up flow.' )
    }
    if ( isLoading ) return <Loading />
    return (
        <Screen screenStyles={ styles.screen }>

            <Image
                style={ styles.logo }
                source={ require( '../assets/bubble-logo.png' ) }
            />
            <Text
                style={ styles.slogan }
            >Amazing Childcare,{ '\n' } in an App.</Text>

            <View style={ styles.inputContainer }>
                <AppLoginInput
                    icon='email'
                    placeholder='Email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    value={ email }
                    setEmail={ setEmail }
                />
                <AppLoginInput
                    icon='lock'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                    value={ password }
                    setPassword={ setPassword }
                />
                <Text style={ styles.forgotTxt } onPress={ () => Alert.alert( 'Forgot Password', 'Pressing this would lead to the forgot password user flow.' ) }>Forgot Password?</Text>
            </View>

            <TouchableOpacity style={ styles.signInBtn } onPress={ handleSignIn }>
                <Text style={ styles.signTxt }>Sign In</Text>
            </TouchableOpacity>

            <View style={ styles.signUpContainer }>
                <Text style={ styles.noAccountTxt }>Don't have an account yet?</Text>
                <TouchableOpacity style={ [ styles.signInBtn, { backgroundColor: '#F5A623' } ] }
                    onPress={ handleSignUp }
                >
                    <Text style={ styles.signTxt }>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </Screen>
    )
}

export default Login

const styles = StyleSheet.create( {
    screen: {
        backgroundColor: appColors.purple
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 30,
        resizeMode: 'contain',
        height: 40
    },
    slogan: {
        color: '#C9B5EE',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    inputContainer: {
        width: '80%',
        alignSelf: 'center'
    },
    forgotTxt: {
        color: '#e9e9e9'
    },
    signInBtn: {
        marginTop: 20,
        backgroundColor: appColors.green,
        borderRadius: 11,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    signTxt: {
        color: appColors.purple,
        fontWeight: 'bold',
        fontSize: 24
    },
    signUpContainer: {
        marginTop: 70
    },
    noAccountTxt: {
        color: '#F3F3F3',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
} )
