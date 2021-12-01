import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert, SrollView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
  const createAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text1}>Aujourd'hui c'est mercredi</Text>
      <Text style={styles.text2}>Demain c'est Jeudi</Text>
      <Text style={styles.text3}>Après demain c'est Vendredi</Text>
      <Image source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
      style={{ width: 70, height: 20 }}/>
      <Image source={require("./assets/konexio-logo_1.png")} 
      style={{ width: 300, height: 100 }}/>

      <Pressable style={styles.button} title={"Alert Button"} onPress={createAlert}>

        <Text style={styles.textbutton}>
          Press Me
        </Text>
      </Pressable>
      
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1314F4',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    

  },

  text: {
    
  },

  text1: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text2: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text3: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textbutton: {
    color: '#12E056',
  },

  button: {
    color: '#1314F4'

  },

  scrollView: {
  
    
  },

});