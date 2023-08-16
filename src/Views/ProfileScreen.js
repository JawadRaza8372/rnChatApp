import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {w, h} from 'react-native-responsiveness';
import ScreenHeader from '../Components/ScreenHeader';
import {mainColor, secColor} from '../AppColors';
import CustomTextInput from '../Components/CustomTextInput';
import CustomAuthBtn from '../Components/CustomAuthBtn';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
        <Image
          source={{
            uri: 'https://clipkulture.com/wp-content/uploads/2022/05/placeholder-img-not-logged-in.png.webp',
          }}
          style={styles.avtarimg}
        />
        <KeyboardAwareScrollView>
          <View style={styles.loginForm}>
            <CustomTextInput
              label={'Phone'}
              value={signUpform.phone}
              onChangeFunct={text =>
                setsignUpform({...signUpform, phone: text})
              }
            />
            <CustomTextInput
              label={'Nick Name'}
              value={signUpform.nickname}
              onChangeFunct={text =>
                setsignUpform({...signUpform, nickname: text})
              }
            />

            <CustomAuthBtn
              title={'Update'}
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
  fiilmybg: {
    width: w('100%'),
    height: h('100%'),
    backgroundColor: mainColor,
  },
  myfilldiv: {
    width: '100%',
    height: '100%',
  },
  avtarimg: {
    width: w('60%'),
    height: w('60%'),
    borderRadius: w('30%'),
    borderWidth: 3,
    borderColor: secColor,
    alignSelf: 'center',
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
