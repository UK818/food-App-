import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native'; 
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';


const HomeScreen = () => {

    const [keyword, setKeyword] = useState('');
    const [results, errorMessage, searchApi] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };
    
    return <>

        <SearchBar
            keyword = {keyword}
            onKeywordChange = {setKeyword}
            onKeywordSubmit = {() => searchApi()}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* {results.length > 0 ? <Text>{results.length} results found</Text> : null} */}

        <ScrollView>
            <ResultsList
                title = 'Cost Effective'
                results = {filterResultsByPrice('$')}
            />
            <ResultsList
                title = 'Bit Pricier'
                results = {filterResultsByPrice('$$')}
            />
            <ResultsList
                title = 'Big Spender'
                results = {filterResultsByPrice('$$$')}
            />
            <ResultsList
                title = 'Lavish Spender'
                results = {filterResultsByPrice('$$$$')}
            />
        </ScrollView>
        

    </>

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;