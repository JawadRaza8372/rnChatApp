import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {inActiveColor, mainColor, secColor} from '../AppColors';
import {w, h} from 'react-native-responsiveness';
const MyMsg = ({isSender}) => {
  return (
    <View style={styles.msgMaindiv}>
      <View style={isSender ? styles.msg : styles.msg2}>
        <Text style={isSender ? styles.msgtxt : styles.msgtxt2}>
          <Text
            style={{
              ...styles.usernameTxt,
              color: !isSender ? inActiveColor : '#BAC8D3',
            }}>
            {isSender ? 'You' : 'Other'}
            {':'}
          </Text>{' '}
          Hy
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
  msgHeader2: {
    width: '85%',
    marginRight: w('10%'),
    marginLeft: w('2%'),
    marginBottom: 5,
  },
  usernameTxt: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: inActiveColor,
  },
  msgHeader: {
    width: '85%',
    marginLeft: w('12%'),
    marginRight: w('2%'),
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
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

  msgDataTime: {
    color: inActiveColor,
    paddingLeft: 6,
  },

  // message-data: {
  //   margin-bottom: 15px;
  // }

  // .message {
  //   color: white;
  //   padding: 18px 20px;
  //   line-height: 26px;
  //   font-size: 16px;
  //   border-radius: 7px;
  //   margin-bottom: 30px;
  //   width: 90%;
  //   position: relative;

  //   &:after {
  //     bottom: 100%;
  //     left: 7%;
  //     border: solid transparent;
  //     content: " ";
  //     height: 0;
  //     width: 0;
  //     position: absolute;
  //     pointer-events: none;
  //     border-bottom-color: $green;
  //     border-width: 10px;
  //     margin-left: -10px;
  //   }
  // }

  // .my-message {
  //   background: $green;
  // }

  // .other-message {
  //   background: $blue;

  //   &:after {
  //     border-bottom-color: $blue;
  //     left: 93%;
  //   }
  // }
});
