import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AppLoginInput = ( { icon, placeholder, setEmail, setPassword, secureTextEntry, value } ) => {

    const handleTextChange = ( inputText ) => {
        secureTextEntry ? setPassword( inputText ) : setEmail( inputText )
    }
    return (
        <View style={ styles.container }>
            {icon && <MaterialCommunityIcons name={ icon } size={ 20 } color='grey' style={ styles.icon } /> }
            <TextInput
                style={ styles.input }
                placeholder={ placeholder }
                placeholderTextColor={ '#818181' }
                onChangeText={ handleTextChange }
                value={ value }
                secureTextEntry={ secureTextEntry }
                autoCapitalize='none'
                autoCorrect={ false }
                textAlign={ 'left' }
            />
        </View>
    )
}

export default AppLoginInput

const styles = StyleSheet.create( {
    container: {
        borderRadius: 11,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
        width: '100%',
        alignSelf: "center"
    },
    icon: {
        marginRight: 10
    },

} )
