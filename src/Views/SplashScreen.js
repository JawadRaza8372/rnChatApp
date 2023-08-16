import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {mainColor, secColor} from '../AppColors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {w, h} from 'react-native-responsiveness';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthScreen');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentcont}>
        <FontAwesome5 name="rocketchat" size={h('20%')} color={mainColor} />
        <Text style={styles.appname}>Chat Rocket</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentcont: {
    width: '100%',
    height: h('30%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  appname: {
    fontSize: h('4%'),
    color: mainColor,
    fontWeight: 'bold',
  },
});
