import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions } 
    from 'react-native';
import data from '../components/Data';
import { Transitioning, Transition } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const Users=[
  {id:'1',uri:require('../assets/1.jpg'),name:"1st image"},
  {id:'2',uri:require('../assets/2.jpg'),name:"2nd image"},
  {id:'3',uri:require('../assets/3.jpg'),name:"3rd image"},
  {id:'4',uri:require('../assets/4.jpg'),name:"4th image"},
  {id:'5',uri:require('../assets/5.jpg'),name:"5th image"},
  {id:'6',uri:require('../assets/6.jpg'),name:"6th image"},
  {id:'7',uri:require('../assets/7.jpg'),name:"7th image"},
]
const { width } = Dimensions.get('window').width;
// const {height} =Dimensions.get('window').height;

const stackSize = 2;
const colors = {
  red: '#EC2379',
  blue: '#0070FF',
  gray: '#777777',
  white: '#ffffff',
  black: '#000000'
};
const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type='slide-bottom'
      durationMs={ANIMATION_DURATION}
      interpolation='easeIn'
    />
    <Transition.Together>
      <Transition.In
        type='fade'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type='slide-bottom'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation='easeOut'
      />
    </Transition.Together>
  </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={Users[0].uri} style={styles.cardImage} />
    </View>
  );
};

const CardDetails = ({ index }) => (
  <View key={data[index].id} style={{ alignItems: 'center' }}>
    {/* <Text style={[styles.text, styles.heading]} numberOfLines={2}>
      {data[index].name}
    </Text>
    <Text style={[styles.text, styles.price]}>{data[index].price}</Text> */}
  </View>
);

export default function ProfileSwiper() {
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',margin:'4%',justifyContent:'space-between' }}>
              <Ionicons name='heart' color='gray' size={35} />
                <Text style={styles.titleText}>Bumble</Text>
                <MaterialIcons name='tune' color='gray' size={35} />
                </View>
      <StatusBar hidden={false} />
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={data}
          cardIndex={index}
          renderCard={card => <Card card={card} />}
          infinite
          horizontalSwipe={true}
          verticalSwipe={false}
          backgroundColor={'transparent'}
          onSwiped={onSwiped}
          onSwipedLeft={onSwiped}
          onSwipedRight={onSwiped}
          onTapCard={() => swiperRef.current.swipeLeft()}
          cardVerticalMargin={50}
          cardHorizontalMargin={20}
          stackSize={stackSize}
          cardStyle={{marginTop:100}}
          containerStyle={{ flex:1,
            resizeMode:'cover',
                  height: null,
                  width: null,
                  borderRadius: 20,}}
          stackScale={4}
          stackSeparation={5}
          animateOverlayLabelsOpacity
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: colors.red,
                  borderColor: colors.red,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: colors.blue,
                  borderColor: colors.blue,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}
        />
      </View>
      
      <View style={styles.bottomContainer}>
      
      
         <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}
        >
          <CardDetails index={index} />
        </Transitioning.View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  swiperContainer: {
    flex: 4
  },
  bottomContainer: {
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    flex:0.35,
    margin:'2%'
  },
  bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
  bottomContainerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: 'cover'
  },
  card: {
    flex: 0.45,
    borderRadius: 20,
    height:300,
    borderWidth:1,
    borderColor:'gray',
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  titleText: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
    color:'orange',
    fontFamily:'Roboto'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    backgroundColor: 'transparent'
  },
  text: { fontFamily: 'Courier' },
  heading: { fontSize: 24, marginBottom: 10, color: colors.gray },
  price: { color: colors.blue, fontSize: 32, fontWeight: '500' }
});