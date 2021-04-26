import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import appColors from '../appColors'

const Sitter = ( { rate, name, rating, distanceInKm } ) => {
    return (
        <View style={ styles.container }>
            <Image style={ styles.img } source={ require( '../assets/janet.png' ) } />
            <Text style={ styles.name }>{ name }</Text>
            <View style={ styles.infoContainer }>
                <Text style={ styles.info }>{ rate || 'Free' }</Text>
                <Text style={ [ styles.info, { color: !rating ? appColors.red : appColors.green } ] }>{ rating || 'No Rating' }</Text>
                <Text style={ styles.info }>{ distanceInKm + 'km' }</Text>
            </View>


        </View>
    )
}

export default Sitter

const styles = StyleSheet.create( {
    container: {
        marginBottom: 35,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '85%',
        paddingBottom: 20,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '80%',

    },
    info: {
        color: appColors.onyx,
        fontSize: 20
    },
    name: {
        color: appColors.onyx,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30
    },
    img: {
        width: '100%',
        marginBottom: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10


    }
} )
