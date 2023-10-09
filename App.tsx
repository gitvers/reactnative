import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'App'>


const { width, height } = Dimensions.get('window');

const App = ({ navigation }: HomeProps) => {

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props} onPress={() => navigation.navigate('Screen1')}>
        <Text>Done</Text>
      </TouchableOpacity>
    )

  }

  return (
    <View style={styles.container}>
      <Onboarding
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <Lottie style={styles.lottie} source={require('./images/boost.json')} autoPlay loop />

            ),
            title: 'Boost Productivity',
            subtitle: 'Subscribe this channel to boost your productivity level',
          },
          {
            backgroundColor: '#fef3c7',
            image: (

              <Lottie style={styles.lottie} source={require('./images/work.json')} autoPlay loop />

            ),
            title: 'Work Seamlessly',
            subtitle: 'Get your work done seamlessly without interruption',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <Lottie style={styles.lottie} source={require('./images/achieve.json')} autoPlay loop />
            ),
            title: 'Achieve Higher Goals',
            subtitle: 'By boosting your productivity we help you to achieve higher goals',

          },
        ]}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie: {
    width: width * 0.9,
    height: width
  },
  doneButton: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100
  }
})


export default App;
