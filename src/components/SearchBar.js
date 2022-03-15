import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Feather } from '@expo/vector-icons';

const SearchBar = ({keyword, onKeywordChange, onKeywordSubmit}) =>{

    return (
        <View
            style = {styles.searchBar}
        >

            <Feather 
                name = 'search' 
                size = {40}    
                style = {styles.icon}
            />

            <TextInput 
                style = {styles.input}
                placeholder = 'Search'
                value = {keyword}
                onChangeText = {onKeywordChange}
                onEndEditing = {onKeywordSubmit}
                autoCapitalize = 'none'
                autoCorrect = {false}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'lightgreen',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 20
    },
    icon: {
        marginHorizontal: 20
    }

});

export default SearchBar;