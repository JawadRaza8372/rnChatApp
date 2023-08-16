import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ScreenHeader from './ScreenHeader';
import {w, h} from 'react-native-responsiveness';
import {mainColor, opWhite, secColor} from '../AppColors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatInfoHead = ({isBack, isMore}) => {
  return (
    <>
      <View style={styles.ChatInfoDiv}>
        <TouchableOpacity
          style={{
            ...styles.backbutton,
            width: w('8%'),
            height: '100%',
            backgroundColor: 'transparent',
          }}
          onPress={isBack}>
          <Entypo name="chevron-left" size={w('8%')} color={secColor} />
        </TouchableOpacity>
        <View style={styles.avtrDiv}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={styles.avtrImg}
          />
        </View>
        <View style={styles.contentDiv}>
          <Text style={styles.headingtxt}>mark mathew zukerburg</Text>
          <Text style={styles.descTxt}>Status</Text>
        </View>
        <View style={styles.btndiv}>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              onPressFun();
            }}>
            <MaterialCommunityIcons
              name="phone-plus-outline"
              size={w('8%')}
              color={secColor}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.backbutton} onPress={isMore}>
            <Feather name="more-vertical" size={w('8%')} color={secColor} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ChatInfoHead;

const styles = StyleSheet.create({
  ChatInfoDiv: {
    width: '100%',
    height: h('10%'),
    backgroundColor: mainColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  avtrDiv: {
    width: w('17%'),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avtrImg: {
    width: w('15%'),
    height: w('15%'),
    borderWidth: 2,
    borderColor: opWhite,
    borderRadius: w('20%'),
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  headingtxt: {
    width: '100%',
    fontSize: h('2%'),
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: secColor,
    marginBottom: h('0.7%'),
  },
  descTxt: {
    width: '100%',
    fontSize: h('1.7%'),
    textTransform: 'capitalize',
    color: secColor,
  },
  contentDiv: {
    width: w('48%'),
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  btndiv: {
    width: w('25%'),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  backbutton: {
    height: '100%',
    width: w('11%'),
    borderRadius: w('17%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
