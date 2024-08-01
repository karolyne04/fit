import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import History from '../screens/History';
import Track from '../screens/Track';
import Settings  from '../screens/Settings';

const Stack = createStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='History' component={History}/>
            <Stack.Screen name='Track' component={Track}/>
            <Stack.Screen name='Settings' component={Settings}/>
        </Stack.Navigator>
    )
}