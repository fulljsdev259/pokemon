import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import colors from '../helper/colors';
import deviceInfo from '../helper/deviceInfo';
import {getPokemonRequest} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../components/Header';
import { useNavigation } from '@react-navigation/core';

type Props = {
    
};
 
  const PokemonDetails: React.FC<Props> = ({}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const pokemons = useSelector(state => state.pokemons.pokemons);

    useEffect(() => {
        dispatch(getPokemonRequest())
    }, [])

    const isEven = (index) => (index % 2 == 0 )

    const renderItem = ({item, index}) => {
        return (
            <View style={styles.itemContainer} >
                <TouchableOpacity 
                    activeOpacity={.5} 
                    style={[styles.itemView, isEven(index) && 
                        { marginHorizontal: (deviceInfo.width * .06)/3 } ]
                    } 
                    onPress={() => navigation.navigate('PokemonDetails', { pokemonName: item.name })}
                >
                    <Image 
                        style={styles.pokeImage} 
                        source={{ uri: item.imageHQ }} 
                        defaultSource={{ uri: item.placeholderBase64 }}
                    />
                    <Text style={styles.pokemonName}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <Header/>
            <View style={styles.container} >
                <FlatList 
                    data={pokemons.data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                    numColumns={2}
                    ListHeaderComponent={()=> <View style={styles.headerView} />}
                    ItemSeparatorComponent={() => <View style={styles.ItemSeperator} />}
                    windowSize={50}
                    maxToRenderPerBatch={20}
                />
            </View>
       </>
    )
}

export default PokemonDetails;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    container:{
        flex:1,
    },
    pokeImage: {
        width: 100, 
        height: 100, 
        resizeMode:'contain'
    },
    itemContainer: {

    },
    itemView: {
        width: deviceInfo.width * .47,
        height: deviceInfo.width * .5,
        backgroundColor: '#4c4cffd9',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        padding: 15,
    },
    pokemonName: {
        fontStyle: 'italic',
        color: colors.WHITE
    },
    ItemSeperator: { 
        width: '100%',
        height: (deviceInfo.width * .06)/3
    },
    headerView: {
        height: (deviceInfo.width * .06)/3
    }
})