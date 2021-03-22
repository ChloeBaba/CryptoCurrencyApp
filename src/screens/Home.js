import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import CryptoCurList from '../components/CryptoCurList';

export default function Home({ navigation }) {

    const PressHandler = () => {
        navigation.navigate('Tracker')
      }

    return (
        <SafeAreaView>
            <View>
                <Button title='My Tracker >' onPress={PressHandler} />
            </View>
            <View>
                <CryptoCurList />
            </View>
        </SafeAreaView>
    );
}