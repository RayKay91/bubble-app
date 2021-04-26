import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import appColors from '../appColors'

const Loading = () => {
    return (
        <View style={ styles.container }>
            <ActivityIndicator
                size={ 'large' }
                color={ appColors.purple }
            />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
} )
