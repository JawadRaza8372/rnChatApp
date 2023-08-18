import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {w, h} from 'react-native-responsiveness';
import ScreenHeader from '../Components/ScreenHeader';
import {mainColor, secColor} from '../AppColors';
import CustomTextInput from '../Components/CustomTextInput';
import CustomAuthBtn from '../Components/CustomAuthBtn';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Entypo from 'react-native-vector-icons/Entypo';
const ProfileScreen = ({navigation}) => {
  const [signUpform, setsignUpform] = useState({
    phone: '03XXXXXXX',
    nickname: 'JawadRaza8372',
  });
  return (
    <SafeAreaView style={styles.fiilmybg}>
      <ScreenHeader
        title={'Profile'}
        isBackButton={() => navigation.goBack()}
      />
      <View style={styles.myfilldiv}>
        <View style={styles.avtrContainer}>
          <ImageBackground
            source={{
              uri: 'https://clipkulture.com/wp-content/uploads/2022/05/placeholder-img-not-logged-in.png.webp',
            }}
            style={styles.avtarimg}>
            <View style={styles.camerabtnIcon}>
              <Entypo name="camera" color={secColor} size={h('3%')} />
            </View>
          </ImageBackground>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.loginForm}>
            <CustomTextInput
              color={mainColor}
              label={'Phone'}
              value={signUpform.phone}
              onChangeFunct={text =>
                setsignUpform({...signUpform, phone: text})
              }
            />
            <CustomTextInput
              color={mainColor}
              label={'Nick Name'}
              value={signUpform.nickname}
              onChangeFunct={text =>
                setsignUpform({...signUpform, nickname: text})
              }
            />

            <CustomAuthBtn
              title={'Update'}
              bgColor={mainColor}
              onClickfun={() => {
                alert(
                  `Nick Name ${signUpform.nickname} Phone ${signUpform.phone}`,
                );
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avtrContainer: {
    width: '100%',
    height: h('25%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fiilmybg: {
    width: w('100%'),
    height: '100%',
    backgroundColor: secColor,
  },
  myfilldiv: {
    width: '100%',
    height: '100%',
  },
  avtarimg: {
    width: w('35%'),
    height: w('35%'),
    borderRadius: w('35%'),
    borderWidth: 1,
    borderColor: mainColor,
    alignSelf: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  camerabtnIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: h('4%'),
  },
  loginForm: {
    width: '100%',
    height: h('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
});
