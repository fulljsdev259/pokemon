import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import colors from '../helper/colors';
import deviceInfo from '../helper/deviceInfo';
import { getPokemonDetailsRequest } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';

 type Props = {
    route?: any
  };
  
  interface StatsElements {
    base_stat: number;
    stat: {
      name: string;
    };
  }

  interface AbilityElements {
    ability: {
      url: string;
      name: string;
    };
  }
  
 const PokemonDetails: React.FC<Props> = ({
     route
 }) =>  {

    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemons.pokemonDetail);
    const { pokemonName } = route.params
    const { currentPokemon, stats, abilities } = pokemonDetail.data

    useEffect(() => {
        dispatch(getPokemonDetailsRequest({ pokemonName }))
    }, [])

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.pokemonName}>{pokemonName}</Text>
            </View>
            {pokemonDetail.isLoading && <Loader />}
            {pokemonDetail.isSuccess &&
                <View style={styles.contentWrapper}>
                    <View style={styles.posterWrapper}>
                        <Image
                            source={{ uri: currentPokemon?.imageHQ }}
                            defaultSource={{ uri: currentPokemon?.placeholderBase64 }}
                            style={styles.mainPoster}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={[styles.infoWrapper,]}>
                            <Text style={styles.statsHeaderText}>Stats</Text>
                            {stats.map((el: StatsElements) => (
                                <Text style={styles.statsText} key={el.stat.name}>
                                    {el.stat.name}: {el.base_stat}
                                </Text>
                            ))}
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.statsHeaderText}>Abilities</Text>
                            {abilities.map((element: AbilityElements) => (
                                <Text style={styles.statsText} key={element.ability.name}>- {element.ability.name}</Text>
                            ))}
                        </View>
                    </View>
                </View>}
        </View>
    )
}

export default PokemonDetails;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainPoster: {
        width: '100%',
        height: deviceInfo.width * .7,
        borderWidth: 1,
        resizeMode: 'contain',
        borderRadius: 3,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: '#2196f3',
    },
    header: {
        height: 60,
        backgroundColor: '#3f51b5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonName: {
        color: colors.WHITE,
        textTransform: "capitalize",
        fontStyle: 'italic',
        fontSize: 17
    },
    contentWrapper: {
    },
    infoWrapper: {
        borderWidth: 1,
        backgroundColor: '#2196f3',
        borderRadius: 3,
        width: deviceInfo.width * .47,
        padding: 5,
        minHeight: deviceInfo.height * .45,
        marginLeft: (deviceInfo.width * .06) / 3
    },
    statsHeaderText: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 15,
        fontStyle: 'italic'
    },
    statsText: {
        textTransform: 'uppercase',
        marginBottom: 10,
        fontStyle: 'italic'
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    posterWrapper: {
        padding: (deviceInfo.width * .06) / 3,
    }
})