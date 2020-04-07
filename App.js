import React, {useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
//import { startAsync } from 'expo/build/AR';
import Navigator from './navigation/navigator';
import { NavigationContainer } from '@react-navigation/native';


const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {
  const [fontLoaded,setFontLoaded]=useState(false);
  if(!fontLoaded){
  return (<AppLoading startAsync={fetchFonts} onFinish={()=>{setFontLoaded(true)}}/>)
  }
  return <Navigator/>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
