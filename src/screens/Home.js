import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

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
                <Text>Home page</Text>
            </View>
        </SafeAreaView>
    );
}