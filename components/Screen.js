import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import appColors from '../appColors'

const Screen = ( { children, screenStyles = { backgroundColor: appColors.lightPurple } } ) => {
    return (
        <SafeAreaView style={ [ styles.container, screenStyles ] }>
            {children }
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create( {
    container: {
        flex: 1
    }
} )