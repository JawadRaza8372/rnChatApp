import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ScreenHeader from './ScreenHeader';
import {w, h} from 'react-native-responsiveness';
import {mainColor, secColor} from '../AppColors';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreenHeader = ({ismoreFunc, title, isSearchFun}) => {
  return (
    <View style={styles.bgColor}>
      <View style={styles.screenHeadCont}>
        {title && <Text style={styles.screenTitle}>{title}</Text>}
      </View>
      <View style={styles.avatrCont}>
        {isSearchFun && (
          <TouchableOpacity style={styles.backbutton} onPress={isSearchFun}>
            <Feather name="search" size={w('6%')} color={secColor} />
          </TouchableOpacity>
        )}
        {ismoreFunc && (
          <TouchableOpacity
            style={{...styles.backbutton, alignItems: 'flex-end'}}
            onPress={ismoreFunc}>
            <Feather name="more-vertical" size={w('6%')} color={secColor} />
          </TouchableOpacity>
        )}
      </View>
      {/* <ScreenHeader title="Chats" isMoreButton={ismoreFunc} />
      <TextInput
        style={styles.textSechInp}
        placeholder="Search By Name"
        placeholderTextColor={secColor}
      /> */}
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: mainColor,
    marginBottom: h('1.5%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: h('7%'),
  },
  textSechInp: {
    width: '90%',
    height: h('6%'),
    marginVertical: h('2%'),
    alignSelf: 'center',
    borderRadius: h('3%'),
    paddingHorizontal: h('2%'),
    borderWidth: 2,
    borderColor: secColor,
    fontSize: h('2.2%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backbutton: {
    height: '100%',
    width: w('10%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
  },
  avatrCont: {
    width: w('20%'),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  screenHeadCont: {
    width: w('76%'),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  screenTitle: {
    fontSize: h('2.6%'),
    fontWeight: '500',
    color: secColor,
  },
});
