import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mainColor, secColor} from '../AppColors';
import {w, h} from 'react-native-responsiveness';
const MyMsg = ({isSender}) => {
  return (
    <View style={styles.msgMaindiv}>
      <View style={isSender ? styles.msg : styles.msg2}>
        <Text style={isSender ? styles.msgtxt : styles.msgtxt2}>
          Hy{' '}
          {isSender
            ? ' I am sender,I am sender,I am sender,I am sender,I am sender,I am sender,I am sender'
            : ' Iam reciver'}
        </Text>
      </View>
    </View>
  );
};

export default MyMsg;

const styles = StyleSheet.create({
  msgMaindiv: {
    width: '100%',
  },
  msg: {
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: w('10%'),
    backgroundColor: mainColor,
    borderRadius: 20,
    marginBottom: h('1.3%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  msgtxt: {
    fontSize: h('2.3%'),
    color: secColor,
    width: '94%',
    alignSelf: 'center',
  },
  msg2: {
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: w('10%'),
    backgroundColor: secColor,
    borderRadius: 20,
    marginBottom: h('1.3%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  msgtxt2: {
    fontSize: h('2.3%'),
    color: mainColor,
    width: '94%',
    alignSelf: 'center',
  },
});
