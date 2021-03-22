import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Tracker from '../screens/Home';

// Set up screens for navigation purposes
const screens = {
    Home: {
        screen: Home
    },
    Tracker: {
        screen: Tracker
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);