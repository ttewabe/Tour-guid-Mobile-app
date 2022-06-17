import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SiteInfoScreen from './SiteInfoScreen';
import TourScreen from './TourScreen';

const Drawer = createDrawerNavigator();
    const screenOptions = {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5637DD' }
    }

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const TourNavigator = () => {
    const Stack = createStackNavigator();
        return(
            <Stack.Navigator
                initialRouteName='Tour'
                screenOptions={screenOptions}>
                <Stack.Screen
                    name='Tour'
                    component={TourScreen}
                    options={{title:'site Tour'}}
                />
                <Stack.Screen
                    name='SiteInfo'
                    component={SiteInfoScreen}
                    options={({route}) =>({
                        title: route.params.site.name
                    })}
                />
            </Stack.Navigator>
        )
    }

const Main = () => {

    return (
        <View style={{ flex: 1, paddingTop:Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}>
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Tour'
                    component={TourNavigator}
                    options={{ title: 'Tour' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;