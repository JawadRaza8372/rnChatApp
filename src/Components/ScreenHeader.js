import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {mainColor, opWhite, secColor} from '../AppColors';
const ScreenHeader = ({title, isBackButton, isMoreButton}) => {
  return (
    <View style={styles.screenHeader}>
      <View style={styles.backButtonCont}>
        {isBackButton && (
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              isBackButton();
            }}>
            <Entypo name="chevron-left" size={w('8%')} color={secColor} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.screenHeadCont}>
        {title && <Text style={styles.screenTitle}>{title}</Text>}
      </View>
      <View style={styles.avatrCont}>
        {isMoreButton && (
          <TouchableOpacity
            style={{...styles.backbutton, alignItems: 'flex-end'}}
            onPress={() => {
              isMoreButton();
            }}>
            <Feather name="more-vertical" size={w('8%')} color={secColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  screenHeader: {
    width: '100%',
    height: h('7%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: mainColor,
  },
  backButtonCont: {
    width: '20%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avtarImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  screenHeadCont: {
    width: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatrCont: {
    width: '20%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customAvtar: {
    width: h('5%'),
    height: h('5%'),
    borderRadius: h('7%'),
    borderWidth: 1,
    overflow: 'hidden',
  },
  backbutton: {
    height: '100%',
    width: w('10%'),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    //backgroundColor: opWhite,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
  },
  screenTitle: {
    fontSize: h('2.6%'),
    fontWeight: 'bold',
    color: secColor,
  },
});
