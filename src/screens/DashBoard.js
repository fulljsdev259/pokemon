import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import colors from '../helper/colors';
import deviceInfo from '../helper/deviceInfo';
import {getUsersRequest} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

 
export default function Dashboard() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.login.users);

    useEffect(() => {
        dispatch(getUsersRequest())
    }, [])

    const renderItem = ({item, index}) => {
        return (
            <View style={styles.card} >
                    <Image style={styles.userImg} source={require('../../assets/logo.jpg')} />
                    <View>
                        <Text style={styles.usernameText} >{item.email}</Text>
                        <Text style={styles.phoneText} >{item.phoneNo}</Text>
                </View>
            </View>
        )
    }

    const renderHeader = () => {
        return(
            <View style={styles.headerWrapper} >
                <Text style={styles.headerText} >User List</Text>
            </View>
        )
    }

    return (
        <View style={styles.container} >
            <FlatList 
                ListHeaderComponent={renderHeader}
                ListFooterComponent={()=> <View style={styles.helperView} />}
                style={styles.flatlist}
                renderItem ={renderItem}
                data={users.data}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={()=> <View style={styles.seperator} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    card:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
    },
    userImg:{
        width:deviceInfo.width*.15,
        height:deviceInfo.width*.15,
        borderRadius:5,
        marginRight:10
    },
    usernameText:{
        fontSize:15
    },
    phoneText:{
        fontSize:13
    },
    seperator:{
        borderWidth:.5,
        marginBottom:10
    },
    helperView:{
        height:25
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:25,
        marginVertical:10,
    },
    flatlist:{
        paddingHorizontal:25
    }
})