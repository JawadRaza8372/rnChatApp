import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatRoomItem from '../Components/ChatRoomItem';
import ScreenHeader from '../Components/ScreenHeader';
import {PermissionsAndroid, Linking, Alert} from 'react-native';

import Contacts from 'react-native-contacts';
const NewMessages = ({navigation}) => {
  const [myContacts, setmyContacts] = useState([]);
  const openSettings = () => {
    Linking.openSettings();
  };

  const askForPermission = async () => {
    try {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Contacts Permission',
          message: 'App needs access to your contacts to read files',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage Permission Granted.');
      } else if (result === PermissionsAndroid.RESULTS.DENIED) {
        console.log('Storage Permission Denied.');
      } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        console.log('Storage Permission Denied with Never Ask Again.');
        Alert.alert(
          'Storage Permission Required',
          'App needs access to your storage to read files. Please go to app settings and grant permission.',
          [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Open Settings', onPress: openSettings},
          ],
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getContacts = () => {
    Contacts.getAll().then(contacts => {
      const check = contacts.map(dat => ({
        fullname: `${dat?.givenName}${
          dat?.familyName?.length > 0 ? ' ' + dat?.familyName : ''
        }`,
        phoneNumber: dat?.phoneNumbers[0].number,
      }));
      console.log(check);
      setmyContacts(check);
    });
  };
  const requestContactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'App needs access to your contacts to read files',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getContacts();
      } else {
        console.log('permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestContactPermission();
  }, []);
  return (
    <SafeAreaView>
      <ScreenHeader
        title={'Contacts'}
        isBackButton={() => navigation.goBack()}
      />
      <FlatList
        data={myContacts}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <ChatRoomItem name={item.fullname} lastmsg={item.phoneNumber} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default NewMessages;

const styles = StyleSheet.create({});
