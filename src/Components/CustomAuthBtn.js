import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import {mainColor, secColor} from '../AppColors';
const CustomAuthBtn = ({title, onClickfun, bgColor}) => {
  return (
    <TouchableOpacity
      onPress={onClickfun}
      style={{
        ...styles.btncont,
        backgroundColor: bgColor ? bgColor : 'transparent',
        borderColor: bgColor ? bgColor : secColor,
      }}>
      <Text style={styles.mylabl}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomAuthBtn;

const styles = StyleSheet.create({
  btncont: {
    width: w('45%'),
    height: h('6%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: h('6%'),
    borderWidth: 2,
    borderColor: secColor,
  },
  mylabl: {
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    color: secColor,
  },
});
