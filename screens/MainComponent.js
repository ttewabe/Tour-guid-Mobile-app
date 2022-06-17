import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import SiteInfoScreen from './SiteInfoScreen';
import TourScreen from './TourScreen';


const TourNavigator = () => {
    const Stack = createStackNavigator();
        return(
            <Stack.Navigator
                initialRouteName='Tour'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#5637DD'
                    },
                    headerTintColor: '#fff'
                }}>
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
            <TourNavigator />
        </View>
    );
};

export default Main;