import React from 'react'
import { TextInput,Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import AppButton from '../../common/Button/AppButton';

export default function Login({navigation}) {
  return (
    <View style={styles.container} >
        <Text style={{margin:15}} variant="headlineMedium">Sign In</Text>
        <TextInput
            style={{margin:15}}
            label="Email"
            // value={''}
            // onChangeText={text => setText(text)}
        />

        <TextInput
             style={{margin:15}}
            label="Password"
            // value={''}
            // onChangeText={text => setText(text)}
        />

        <AppButton clickEvent={()=>{}} title='Login'/>

        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
            <AppButton title='Register' clickEvent={()=>{navigation.navigate('register')}}/>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // borderWidth:2,
        borderRadius: 10,
        padding:10,
        margin:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, 
    
    }
})
