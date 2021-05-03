import { useNavigation } from '@react-navigation/core';
import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Keyboard, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import colors from '../helper/colors';
import deviceInfo from '../helper/deviceInfo';

type Props = {
    route?: any
};

 const Header: React.FC<Props> = ({}) => {

    const [state, setState] = useState({
        isFocused: false,
        matchedPokemon: []
    })
    const navigation = useNavigation()
    const inputRef = useRef(null)
    const inputValue = useRef('')

    const pokemons = useSelector(state => state.pokemons.pokemons);

    const handleChange = (text) => {
        inputValue.current = text
        let matchedPokemon = pokemons.data.filter(a => a.name.match(text.toLowerCase()))
        if (text.trim() === '') {
            matchedPokemon = []
        }
        setState({ ...state, matchedPokemon })
    }

    const handleNavigate = (item) => {
        navigation.navigate('PokemonDetails', { pokemonName: item.name })
    }

    const handleClose = () => {
        inputValue.current = ''
        inputRef.current?.clear()
        Keyboard.dismiss();
        setState({ ...state, isFocused: false, })
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={.5}
                key={String(index)}
                style={styles.searchItemView}
                onPress={() => handleNavigate(item)}
            >
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.pokemonNameText}>NAME: {item.name}</Text>
                <View style={styles.pokemonStrenth}>
                    <Text style={styles.idText}>ID: {item.id}</Text>
                    <Text style={styles.weightText}>WEIGHT: {item.weight}</Text>
                </View>
                <Image
                    source={{ uri: item.image }}
                    style={styles.logo}
                    defaultSource={{ uri: item.placeholderBase64 }}
                />
            </TouchableOpacity>
        )
    }

    const ListEmptyComponent = () => {
        return (
            <View style={styles.emptyView}>
                <Text style={styles.noMatched}>
                    {inputValue.current ? 'No matched pokemons, Search with another keywords' : 'Search Pokemons'}
                </Text>
            </View>
        )
    }
    return (
        <View style={[styles.headerView,]}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <TextInput
                style={styles.textInput}
                placeholder='search pokemon'
                onFocus={() => setState({ ...state, isFocused: true })}
                onChangeText={handleChange}
                ref={inputRef}
            />
            {
                <TouchableOpacity  
                    onPress={handleClose} 
                    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20}}
                >
                    <Text
                   
                    style={[styles.Xtext, state.isFocused && { opacity: 1 }]}
                >
                    X
                </Text>
                </TouchableOpacity>
            }
            {state.isFocused &&
                <View style={styles.searchModal}>
                    {
                        <FlatList
                            data={state.matchedPokemon}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => String(index)}
                            maxToRenderPerBatch={20}
                            windowSize={50}
                            ListEmptyComponent={ListEmptyComponent}
                            contentContainerStyle={{flexGrow: 1}}
                        />
                    }
                </View>}
        </View>
    )
}

export default Header;


const styles = StyleSheet.create({
    headerView: {
        height: 60,
        backgroundColor: '#3f51b5',
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: colors.WHITE,
        width: deviceInfo.width * .6,
        alignSelf: 'center',
        borderWidth: 0,
        height: 40,
        paddingHorizontal: 5,
        borderRadius: 30
    },
    searchModal: {
        width: '100%',
        height: deviceInfo.height,
        position: 'absolute',
        backgroundColor: colors.WHITE,
        ...StyleSheet.absoluteFillObject,
        top: 60,
        zIndex: 100
    },
    logo: {
        width: 50,
        resizeMode: "contain",
        height: 30,
        marginLeft: 10
    },
    Xtext: {
        marginRight: 10,
        opacity: 0,
        color: colors.WHITE
    },
    searchItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1
    },
    pokemonStrenth: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    weightText: {
        marginLeft: 10
    },
    idText: {
    },
    pokemonNameText: {
        width: deviceInfo.width * .3,
    }, 
    emptyView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noMatched: {
        fontSize: 12
    }
})