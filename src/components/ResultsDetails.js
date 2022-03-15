import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ResultsDetails = ({result }) => {

    return <View style = {styles.container}>

        <Image
            source = {{uri: result.image_url}}
            style = {styles.image}
        />
        <Text style = {styles.name}>{result.name}</Text>
        <Text>{result.rating} stars, {result.review_count} reviews</Text>


    </View>

}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 150,
        borderRadius: 25,
        marginBottom: 5
    },
    container: {
        marginLeft: 15,
        width: 250
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultsDetails;