import React from 'react';
import { Button, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import CryptoCurList from '../components/CryptoCurList';

// Home page Screen in which the general Crypto Currency list component is called
export default function Home({ navigation }) {

  const PressHandler = () => {
    navigation.navigate('Tracker')
  }
  return (
        <SafeAreaView style={styles.container}>
                <View>
                  <Button title='My Tracker >' onPress={PressHandler} />
                </View>
                <View style={styles.title}>
                  <Text style={styles.textTitle}> Crypto Currency | Price USD | Price change (last 24h) </Text>
                </View>
                <Text>
                    <View style={styles.contentList}>
                        <CryptoCurList />
                    </View>
                </Text>
        </SafeAreaView>
        );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  contentList: {
    justifyContent:'center',
    alignItems:'center',
    padding: 24,
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