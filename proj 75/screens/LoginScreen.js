import React from 'react';
import{View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyBoardAvoidingView}from 'react-native';
import * as firebase from 'fireabse'
export default class LoginScreen extends React.Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:''
    }
  }
  login=async(email,password)=>{
    if(email && passsword){
      try{
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
          this.props.navigation.navigate('Transaction')
        }
      }
      catch(error){
        switch(error.code){
          case 'auth/user-not-found';
          Alert.alert("user doesn't exist")
          console.log("doesn't exist")
          break
          case 'auth/invalid-email';
          Alert.alert('incorrect email or password')
          console.log('invalid')
          break
        }
      }
    }
    else{
      Alert.alert('enter email and password')
    }
  }
  render(){
    return(
      <KeyBoardAvoidingView style = {{alignItems:'center',marginTop:20}}>
      <View>
        <Image
        source={require("../assets/read.png")}
        style={{width:200,height:200}}/>
      </View>
      <View>
        <TextInput
        style={styles.loginBox}
        placeholder="abc@example.com"
        keyboardType = 'email-address'
        onChangeText={{text}}=>{
          this.setState({
            emailId: text
          })
        })
        />
        <TextInput
        style={styles.loginBox}
        secureTextEntry = {true}
        placeholder="enter Password"
        onChangeText={{text}}=>{
          this.setState({
            password: text
          })
        })
        />
      </View>
      </KeyBoardAvoidingView>
    
  }
}