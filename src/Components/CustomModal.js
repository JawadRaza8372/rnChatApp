import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {w, h} from 'react-native-responsiveness';
import {secColor} from '../AppColors';
const CustomModal = ({modalval, changeVal, data}) => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalval}
        onRequestClose={changeVal}>
        <View style={styles.modalview}>
          <TouchableOpacity
            onPress={changeVal}
            style={styles.isbackbtnSmallW}
          />
          <View style={styles.rowcont}>
            <TouchableOpacity onPress={changeVal} style={styles.isbackless} />
            <View style={styles.manuecont}>
              {data?.map((dat, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={dat.pressFunct}
                  style={styles.manueitem}>
                  <Text style={styles.itmtxt}>{dat.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity onPress={changeVal} style={styles.isbackbtn} />
        </View>
      </Modal>
    </>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalview: {
    width: '100%',
    height: '100%',
    // backgroundColor: "rgba(0,0,0,0.5)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  rowcont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '95%',
    //paddingTop: h("3%"),
  },
  manuecont: {
    backgroundColor: secColor,
    width: '60%',
    alignSelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  isbackless: {
    width: '40%',
    height: '100%',
  },
  isbackbtnSmallW: {
    width: '100%',
    height: h('5.1%'),
  },
  isbackbtn: {
    width: '100%',
    flex: 1,
  },
  manueitem: {
    width: '100%',
    height: h('4%'),
    marginBottom: h('1%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itmtxt: {
    fontSize: h('2.2%'),
    width: '90%',
  },
});
