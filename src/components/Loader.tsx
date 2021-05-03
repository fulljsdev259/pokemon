import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import colors from '../helper/colors'

type Props = {
    type?: 'NORMAL'
};

const Loader: React.FC<Props> = ({ type = 'NORMAL' }) => {
    return (
        <View style={[styles.container, type ==='NORMAL' && { backgroundColor: colors.TRANSPARENT }]} > 
            <View style={styles.loaderWraper} >
                <ActivityIndicator color={colors.BLACK} size='large' />
            </View>
        </View>
    )
}

export default Loader;
 
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,.7)',  
    },
    loaderWraper:{
        width: 100,
        height: 100,
        backgroundColor: colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})