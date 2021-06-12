import React from 'react';
import {View,Text,Button,StyleSheet,FlatList, VirtualizedList, SafeAreaView, ScrollView} from 'react-native';
import{Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../config/MessageStyles';
import { color } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chatscreen from '../screens/Chatscreen';
import { Avatar } from 'react-native-gifted-chat';
// import Discussion from '../screens/Discussion';

const Messages =[
    {
        id:'1',
        userName:'Hayley Marshell',
        userImg:require('../assets/girl1.jpg'),
        messageTime:'4mins ago',
        messageText:'Hey there ,How are you?'
    },
    {
        id:'2',
        userName:'Elijah',
        userImg:require('../assets/guy1.jpg'),
        messageTime:'10mins ago',
        messageText:'Hey are you coming over'
    },
    {
        id:'3',
        userName:'Cami',
        userImg:require('../assets/girl2.jpg'),
        messageTime:'2 hours ago',
        messageText:'Sorry i was busy man!'
    },
    {
        id:'4',
        userName:'Klaus',
        userImg:require('../assets/guy2.jpg'),
        messageTime:'1 hour ago',
        messageText:'If my name pop up on your phone answer it.'
    },
    {
        id:'5',
        userName:'Elena',
        userImg:require('../assets/girl3.jpg'),
        messageTime:'44mins ago',
        messageText:'How are you doing ?'
    },
    {
        id:'6',
        userName:'Stefan',
        userImg:require('../assets/guy3.jpg'),
        messageTime:'21mins ago',
        messageText:'I was in middle of cooking'
    },
    {
        id:'7',
        userName:'Bonnie',
        userImg:require('../assets/girl4.jpg'),
        messageTime:'4mins ago',
        messageText:'Hey there ,How are you?'
    },
    {
        id:'8',
        userName:'Ian',
        userImg:require('../assets/guy4.jpg'),
        messageTime:'21mins ago',
        messageText:'Hey u hv Bourbon there!'
    },
    {
        id:'9',
        userName:'Caroline',
        userImg:require('../assets/girl5.jpg'),
        messageTime:'10mins ago',
        messageText:'Hey are you coming over'
    },
    
    
]

const ChatStack = ({navigation}) =>{
    return(
        <Container style={styles.container}>
            <View style={styles.header} />
               
               <View style={{flexDirection:'row'}}> 
               <Text style={{fontWeight:'bold',fontSize:14}}>Match Queue</Text>
               <ScrollView horizontal={true}
               renderItem ={({item})=>(
                <Avatar>
                    <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
                </Avatar>
               )}

               /> 
               
                </View>
                <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <Card onPress={() => navigation.navigate('Chatscreen'
                , {userName: item.userName}
                )}>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
            />
           
        </Container>
    );
}
export default ChatStack;

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    header:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'8%',
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        shadowColor:'#b0c4de',
        shadowRadius:8,
        shadowOpacity:100,
        shadowOffset:{width:0,height:1},
        flexDirection:'row'
        
        
    }
});