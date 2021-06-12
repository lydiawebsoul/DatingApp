import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ProfileSwiper from './src/screens/ProfileSwiper';

import ChatScreen from './src/screens/Chatscreen';
import ChatStack from './src/screens/ChatStack';
import Chats from './src/screens/Chats';
import AppStack from './src/navigation/AppStack';
import ChatStackNavigator from './src/navigation/Navigator';
const App=() => {
  

  return (
    <NavigationContainer>
      <ChatStackNavigator/>
    </NavigationContainer>
        
        //<ProfileSwiper/>
        //<ChatScreen/>
        //<ChatStack/>
        //<Chats/>
        //<AppStack/>
      
  );
};



export default App;
