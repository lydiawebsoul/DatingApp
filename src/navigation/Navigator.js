import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Discussion from '../screens/Discussion';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileSwiper from '../screens/ProfileSwiper';
import ChatStack from '../screens/ChatStack';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor:'#f2404c',
                inactiveTintColor:'#000119',
                style:{
                    height:65,
                    justifyContent:'center',
                    paddingVertical:15,
                    backgroundColor:'#FFF',
                    elevation:2
                }
            }}
        >
        <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
            tabBarLabel:'',
            tabBarIcon:({color,size})=>(
                <Ionicons name='person' color={color} size={size}/>
            )
        }}
    />
     <Tab.Screen
        name='ProfileSwiper'
        component={ProfileSwiper}
        options={{
            tabBarLabel:'',
            tabBarIcon:({color,size})=>(
                <FontAwesome name='align-center' color={color} size={size}/>
            )
        }}
    />
    <Tab.Screen
                    name='ChatStack'
                    component={ChatStack}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <Ionicons name='chatbox' color={color} size={size}/>
                        )
                    }}
                />
                {/* <Tab.Screen
                    name='Chat'
                    component={Chat}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <Ionicons name='chatbox' color={color} size={size}/>
                        )
                    }} 
                />*/}
        </Tab.Navigator>
    );
};
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
};

const ChatStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Chat' component={BottomTabNavigator}/>
            <Stack.Screen name='Discussion' component={Discussion}/>
        </Stack.Navigator>
    )
}

export default ChatStackNavigator;