import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../helper/colors';
import deviceInfo from '../helper/deviceInfo';
import validator from '../helper/validator';
import {loginRequest} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
 
export default function Login({navigation}) {

    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login.login);

    const [state, setState] = useState({
        username:'',
        password:'',
        errors:''
    })

    const handleChange = (value, name) => {
        let data = {...state};
        data[name] = value;
        setState(data);
    }

    const handleLogin = () => {
        const errors = validator(state);
        setState({...state, errors})

        if(Object.keys(errors).length){
            return;
        }else{
            dispatch(loginRequest({username:state.username}));
        }
    }

    useEffect(() => {
        if(loginData.isSuccess){
            navigation.replace('Dashboard');
        }
    }, [loginData.isSuccess])

    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.logoContainer} >
                    <Image 
                        source={require('../../assets/logo.jpg')}
                        style={styles.logo}
                    />
                    <Text style={styles.appName} >appiness</Text>
                </View>
                <View style={styles.pageIntroWrapper} >
                    <Text style={styles.loginText} >Log in.</Text>
                    <Text style={styles.descriptionText} >Log in with your data that you entered during your registration.</Text>
                </View>
                <View>
                    <View>
                        <Text style={styles.label} >Your username</Text>
                        <TextInput 
                            onChangeText={(value) => handleChange(value, 'username')} 
                            style={styles.input} 
                            placeholder='name@domain.com' 
                            value={state.username}
                        />
                        <Text style={styles.error} >{state.errors?.username || loginData.message}</Text>    
                    </View>
                    <View style={styles.passwordWrapper} >
                        <Text style={styles.label}>Your password</Text>
                        <TextInput 
                            onChangeText={(value) => handleChange(value, 'password')} 
                            style={styles.input} 
                            placeholder='at least 8 characters' 
                            value={state.password}
                        />
                        <Text style={styles.error} >{state.errors?.password}</Text>  
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.loginBtn}
                    activeOpacity={.5}
                    onPress={handleLogin}
                >
                    <Text style={styles.btnText} >Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:25
    },
    logo:{
        width:deviceInfo.width*.1,
        height:deviceInfo.width*.1,
        borderRadius:deviceInfo.width*.1/2,
    },
    logoContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    appName:{
        fontSize:15,
        marginLeft:5,
        color:colors.APPCOLOR,
        fontWeight:'bold'
    },
    loginText:{
        fontSize:25,
        fontWeight:'bold'
    },
    pageIntroWrapper:{
        marginVertical:70
    },
    descriptionText:{
        fontSize:15,
        opacity:.5,
        marginTop:5
    },
    input:{
        borderWidth:1,
        borderRadius:5,
        borderColor:colors.APPCOLOR,
        marginTop:7,
        paddingHorizontal:10
    },
    passwordWrapper:{
        marginTop:20
    },
    loginBtn:{
        backgroundColor:colors.APPCOLOR,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:15,
        marginTop:70
    },
    btnText:{
        color:colors.WHITE
    },
    label:{
        opacity:.6,
        fontWeight:'700'
    },
    error:{
        color:colors.RED,
        opacity:.6,
        marginTop:3
    }
})