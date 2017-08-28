import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Inputs } from "./App.js"
/*
const Style = () => {
	return ( <View style = {styles.container}>
         <Text style = {styles.text}>
            <Text style = {styles.capitalLetter}>
               AMNH 2017 Eclipse Application
            </Text>

         </Text>
      </View>
   )
}

export default Style
*/
const styles = StyleSheet.create ({

   container: {
      marginTop: 50,
   },

   text: {
      color: '#41cdf4',
   },

   capitalLetter: {
      color: 'purple',
      fontSize: 20,
      alignItems: 'center',
			justifyContent: 'center',
   },

   textInput: {
      padding: 22,
      //fontWeight: 'bold',
      color: 'black'
   },

   textShadow: {
      textShadowColor: 'red',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   },

	input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },

   submitButton: {
			borderRadius: 50/2,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#666699',
      //padding: 10,
      margin: 15,
      height: 40,
   },

   submitButtonText:{
      color: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: 24
   },

   clearButton: {
	  backgroundColor: '#7a42f4',
      margin: 15,
      height: 40,
   },

   clearButtonText:{
      color: 'white'
   },
	 radius:{
      height: 50,
      width: 50,
      borderRadius: 50 / 2,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(0, 122, 255, 0.3)',
      alignItems: 'center',
      justifyContent: 'center'
  },

  marker:{
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    overflow: 'hidden',
		borderRadius: 20/2,
    backgroundColor: 'blue',
  },

  container: {
    flex: 1,
    backgroundColor: '#666699',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
  	left: 0,
  	right: 0,
  	top: 0,
  	bottom:0,
  	position:'absolute'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box: {
  width: 200,
  height: 200,
  backgroundColor: 'red',
},
button: {
  backgroundColor: 'black',
  paddingHorizontal: 20,
  paddingVertical: 15,
  marginTop: 15,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
