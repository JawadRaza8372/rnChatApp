import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Feather from 'react-native-vector-icons/Feather';
import {mainColor, secColor} from '../AppColors';
const MesgSendComp = () => {
  return (
    <View style={styles.mainDiv}>
      <TextInput
        style={styles.inputField}
        placeholderTextColor={secColor}
        placeholder="Message"
      />
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => {
          onPressFun();
        }}>
        <Feather name="send" size={w('6%')} color={secColor} />
      </TouchableOpacity>
    </View>
  );
};

export default MesgSendComp;

const styles = StyleSheet.create({
  mainDiv: {
    width: '100%',
    height: h('7%'),
    backgroundColor: mainColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  inputField: {
    height: '90%',
    width: '85%',
    paddingHorizontal: h('2%'),
    color: secColor,
    fontSize: h('2.2%'),
  },
  backbutton: {
    height: h('6%'),
    width: h('6%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: mainColor,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
  },
});
