import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import CryptoCurTracker from '../components/CryptoCurTracker';

// Tracker page Screen in which the added/selected Crypto Currencies list component is called
export default function Tracker() {

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textTitle}> Crypto Currency | Price USD | Price change (last 24h) </Text>
        </View>
        <Text>
            <View style={styles.content}>
                <CryptoCurTracker />
            </View>
        </Text>
    </SafeAreaView>
  );
        }
        

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  content: {
    justifyContent:'center',
    alignItems:'center',
    padding: 24,
    marginTop: 50,
    marginLeft:30,
    backgroundColor:'white'
    },
    title: {
      padding: 10,
      marginLeft: 30
    },
    textTitle: {
      fontWeight:'bold'
    }
  });