import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {w, h} from 'react-native-responsiveness';
import {inActiveColor, secColor} from '../AppColors';
const CustomTextInput = ({label, value, onChangeFunct, color}) => {
  // value = "2837";
  const [isfocused, setisfocused] = useState(false);
  useEffect(() => {
    if (value && value?.length > 0) {
      setisfocused(true);
    } else {
      setisfocused(false);
    }
  }, [value]);

  const styles = StyleSheet.create({
    inputcontainer: {
      width: w('85%'),
      height: h('8%'),
      position: 'relative',
      borderWidth: 0,
      borderBottomWidth: 2,
      borderColor: color ? color : secColor,
      marginBottom: h('3%'),
    },
    textinput: {
      width: '100%',
      height: h('5.5%'),
      fontSize: h('2.5%'),
      color: color ? color : secColor,
      position: 'absolute',
      bottom: 0,
    },
    mylabel: {
      position: 'absolute',
      bottom: isfocused ? h('3%') : h('0.8%'),
      fontSize: isfocused ? h('1.8%') : h('2.5%'),
      marginBottom: isfocused ? h('2%') : 0,
      color: color ? color : secColor,
    },
  });

  return (
    <View style={styles.inputcontainer}>
      <Text style={styles.mylabel}>{label ? label : 'Label'}</Text>
      <TextInput
        onFocus={() => setisfocused(true)}
        onBlur={() => {
          if (value && value?.length > 0) {
            setisfocused(true);
          } else {
            setisfocused(false);
          }
        }}
        style={styles.textinput}
        value={value}
        onChangeText={onChangeFunct}
      />
    </View>
  );
};

export default CustomTextInput;
