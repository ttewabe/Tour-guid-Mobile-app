import { StyleSheet, Platform, View } from 'react-native';
import {Icon} from 'react-native-elements';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SiteInfoScreen from './SiteInfoScreen';
import TourScreen from './TourScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

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
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft:()=>(
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}                
            />
          
        </Stack.Navigator>
    )
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About'
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft:()=>(
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}                
            />
          
        </Stack.Navigator>
    )
}
const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact Us',
                    headerLeft:()=>(
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}                
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
                    options={({ navigation }) => ({
                        title:'Site Tour',
                        headerLeft:()=>(
                            <Icon
                                name='list'
                                type='font-awesome'
                                iconStyle={styles.stackIcon}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        )
                    })}    
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
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 10 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Tour'
                    component={TourNavigator}
                    options={{
                        title: 'Site Tour',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 10 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                    options={{ 
                        title: 'About',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 10 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ 
                        title: 'Contact Us',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 10 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};
const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});
export default Main;