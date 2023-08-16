import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import {mainColor, secColor} from '../AppColors';
const GroupMembers = ({name, removeItem}) => {
  return (
    <TouchableOpacity
      onPress={removeItem}
      style={{
        height: h('6%'),
        width: 'auto',
        paddingHorizontal: w('3%'),
        marginRight: w('2%'),
        backgroundColor: secColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: h('2%'),
      }}>
      <Text style={{fontSize: h('2.1%'), color: mainColor}}>{name}</Text>
    </TouchableOpacity>
  );
};

export default GroupMembers;

const styles = StyleSheet.create({});
