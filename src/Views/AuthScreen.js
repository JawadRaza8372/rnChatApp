import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {inActiveColor, mainColor, secColor} from '../AppColors';
import CustomTextInput from '../Components/CustomTextInput';
import CustomAuthBtn from '../Components/CustomAuthBtn';
import {w, h} from 'react-native-responsiveness';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomPasswordInput from '../Components/CustomPasswordInput';
const AuthScreen = ({navigation}) => {
  const [uitemplt, setuitemplt] = useState(false);
  const [signUpform, setsignUpform] = useState({
    phone: '',
    password: '',
    nickname: '',
  });
  const [loginForm, setloginForm] = useState({phone: '', password: ''});
  return (
    <SafeAreaView style={styles.fillmybg}>
      <View style={styles.logoContainer}>
        <FontAwesome5 name="rocketchat" size={h('15%')} color={mainColor} />
      </View>
      {uitemplt ? (
        <>
          <View style={styles.createForm}>
            <Text style={styles.mylable}>Create Account</Text>
            <CustomTextInput
              color={mainColor}
              label={'Nick Name'}
              value={signUpform.nickname}
              onChangeFunct={text =>
                setsignUpform({...signUpform, nickname: text})
              }
            />
            <CustomTextInput
              color={mainColor}
              label={'Phone'}
              value={signUpform.phone}
              onChangeFunct={text =>
                setsignUpform({...signUpform, phone: text})
              }
            />

            <CustomPasswordInput
              label={'Password'}
              color={mainColor}
              value={signUpform.password}
              onChangeFunct={text =>
                setsignUpform({...signUpform, password: text})
              }
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.createForm}>
            <Text style={styles.mylable}>Login</Text>
            <CustomTextInput
              color={mainColor}
              label={'Phone'}
              value={loginForm.phone}
              onChangeFunct={text => setloginForm({...loginForm, phone: text})}
            />
            <CustomPasswordInput
              color={mainColor}
              label={'Password'}
              value={loginForm.password}
              onChangeFunct={text =>
                setloginForm({...loginForm, password: text})
              }
            />
          </View>
        </>
      )}
      <CustomAuthBtn
        bgColor={mainColor}
        title={uitemplt ? 'SignUp' : 'Login'}
        onClickfun={() => {
          navigation.navigate('ChatList');
        }}
      />
      <TouchableOpacity
        style={{marginTop: h('3%')}}
        onPress={() => setuitemplt(!uitemplt)}>
        <Text style={styles.switchtxt}>
          {uitemplt
            ? 'Already have an account! Login'
            : "Don't have an account?SignUp"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: h('20%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  fillmybg: {
    width: '100%',
    height: '100%',
    backgroundColor: secColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  loginForm: {
    width: '100%',
    height: h('60%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  createForm: {
    width: '100%',
    height: h('53%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  mylable: {
    fontSize: h('4%'),
    fontWeight: 'bold',
    color: mainColor,
    marginVertical: h('4%'),
  },
  switchtxt: {
    fontSize: h('1.9%'),
    color: inActiveColor,
  },
});
