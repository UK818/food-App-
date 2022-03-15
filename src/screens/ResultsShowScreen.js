import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet , Image, FlatList, ScrollView} from 'react-native';
import yelp from '../api/yelp';
// import ResultsList from '../components/ResultsList';

const ResultsShowScreen = ({navigation}) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    
    useEffect(() => {
        getResult(id)
    }, []);
    

    if( !result){
        return null;
    }
    
    return <View 
        style = {styles.container}
    >
        <Text
            style = { styles.text}
        >
            {result.name}
        </Text>
        <FlatList
            showsVerticalScrollIndicator = {false}
            data = {result.photos}
            keyExtractor = {(photo) => photo}
            renderItem = {({item}) => {
                return <Image 
                    source = {{uri: item }}
                    style = {styles.image}
                />
            }}
        />

    </View>

}

const styles = StyleSheet.create ({
    image: {
        height: 300,
        width: 350,
        marginBottom: 20
    },
    container: {
        padding: 30
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    }
})

export default ResultsShowScreen;