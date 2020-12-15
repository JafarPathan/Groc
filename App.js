import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
    Image,
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TransactionScreen from './screens/Transaction';
import AccountScreen from './screens/Account';
import HomeScreen from './screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeDrawer} />
        </HomeStack.Navigator>
    );
}
const AccountStack = createStackNavigator();

function AccountStackScreen() {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="Account" component={AccountScreen} />
        </AccountStack.Navigator>
    );
}

const TransactionStack = createStackNavigator();

function TransactionStackScreen() {
    return (
        <TransactionStack.Navigator>
            <TransactionStack.Screen
                name="Transaction"
                component={TransactionScreen}
            />
        </TransactionStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Transaction') {
                            iconName = focused
                                ? 'ios-cash'
                                : 'ios-cash-outline';
                        } else if (route.name === 'Account') {
                            iconName = focused
                                ? 'ios-person'
                                : 'ios-person-outline';
                        }
                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen
                    name="Transaction"
                    component={TransactionStackScreen}
                />
                <Tab.Screen name="Account" component={AccountStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
