import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import appColors from '../appColors'
import Screen from '../components/Screen'
const SitterProfile = ( { route } ) => {
    const sitterDetails = route.params
    return (

        <ScrollView style={ styles.container }>
            <Image source={ require( '../assets/janet.png' ) } style={ styles.img } />
            <Text style={ styles.heading }>Name</Text>
            <Text style={ styles.detail }>{ sitterDetails.fullName }</Text>
            <Text style={ styles.heading }>Bio</Text>
            <Text style={ styles.detail }>{ sitterDetails.biography }</Text>
            <Text style={ styles.heading }>Hourly Rate</Text>
            <Text style={ styles.detail }>£{ sitterDetails.hourlyRate }</Text>
            <Text style={ styles.heading }>Rating</Text>
            <Text style={ styles.detail }>{ sitterDetails.ratingPercentage ? sitterDetails.ratingPercentage + '%' : 'No rating yet' }</Text>
            <Text style={ styles.heading }>Sits Completed</Text>
            <Text style={ styles.detail }>{ sitterDetails.sits }</Text>
            <Text style={ styles.heading }>First Aid Trained</Text>
            <Text style={ styles.detail }>{ sitterDetails.firstAidTrained ? 'Yes' : 'No' }</Text>
            <Text style={ styles.heading }>SEN Experience</Text>
            <Text style={ styles.detail }>{ sitterDetails.specialNeedsExperience ? 'Yes' : 'No' }</Text>
            <Text style={ [ styles.detail, styles.interview ] }>{ sitterDetails.coffeeInterviewEnabled ? 'Available for a quick chat prior to booking.' : 'No' }</Text>
        </ScrollView>

    )
}

export default SitterProfile

const styles = StyleSheet.create( {
    container: {
        backgroundColor: appColors.lightPurple,
        padding: 15,
        borderRadius: 10,

    },
    img: {
        borderRadius: 100,
        borderColor: appColors.purple,
        borderWidth: 5,
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: 10
    },
    detail: {
        marginLeft: 20,
        marginBottom: 15,
        color: appColors.onyx,
        fontSize: 18
    },
    heading: {
        color: appColors.purple,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10
    },
    interview: {
        color: appColors.green,
        marginBottom: 100
    }
} )
