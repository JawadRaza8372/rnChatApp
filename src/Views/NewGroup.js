import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ChatRoomItem from '../Components/ChatRoomItem';
import ScreenHeader from '../Components/ScreenHeader';
import {w, h} from 'react-native-responsiveness';
import {PermissionsAndroid, Linking, Alert} from 'react-native';

import Contacts from 'react-native-contacts';
//import * as Contacts from "expo-contacts";
import CustomTextInput from '../Components/CustomTextInput';
import {mainColor, secColor} from '../AppColors';
import GroupMembers from '../Components/GroupMembers';
import CustomAuthBtn from '../Components/CustomAuthBtn';
const NewGroup = ({navigation}) => {
  const [groupMembers, setgroupMembers] = useState([]);
  const [groupname, setgroupname] = useState('');
  const [myContacts, setmyContacts] = useState([]);
  console.log(groupMembers);
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
  // useEffect(() => {
  // 	(async () => {
  // 		const { status } = await Contacts.requestPermissionsAsync();
  // 		if (status === "granted") {
  // 			const { data } = await Contacts.getContactsAsync({
  // 				fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
  // 			});

  // 			if (data.length > 0) {
  // 				// const contact = ;
  // 				console.log("==================");
  // 				setmyContacts(
  // 					data.map((dat) => {
  // 						return {
  // 							name: dat.name,
  // 							phone: dat.phoneNumbers[0].number,
  // 						};
  // 					})
  // 				);
  // 				console.log(myContacts);
  // 			}
  // 		}
  // 	})();
  // }, []);

  return (
    <SafeAreaView style={{width: '100%', height: h('96.7%')}}>
      <ScreenHeader
        title={'Create Group'}
        isBackButton={() => navigation.goBack()}
      />
      <View style={{width: '100%', flex: 1}}>
        <FlatList
          data={myContacts}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                if (
                  groupMembers.filter(dat => dat.fullname === item.fullname)
                    .length > 0
                ) {
                  return null;
                } else {
                  setgroupMembers([...groupMembers, item]);
                }
              }}>
              <ChatRoomItem name={item.fullname} lastmsg={item.phoneNumber} />
            </TouchableOpacity>
          )}
          ListHeaderComponent={
            <View style={styles.textinptrcon}>
              <CustomTextInput
                label={'Group Name'}
                value={groupname}
                onChangeFunct={text => setgroupname(text)}
              />
              <Text style={styles.heading}>Participants</Text>
              <View style={styles.memberdiv}>
                <FlatList
                  horizontal
                  keyExtractor={(item, index) => index}
                  data={groupMembers}
                  ListEmptyComponent={
                    <View style={styles.memberdiv}>
                      <Text
                        style={{
                          color: secColor,
                          fontSize: h('2.3%'),
                        }}>
                        No Members Yet
                      </Text>
                    </View>
                  }
                  renderItem={({item, index}) => (
                    <GroupMembers
                      name={item?.fullname}
                      removeItem={() =>
                        setgroupMembers(
                          groupMembers.filter((dat, ind) => index !== ind),
                        )
                      }
                    />
                  )}
                />
              </View>
            </View>
          }
        />
      </View>

      <View
        style={{
          width: '100%',
          height: h('7%'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomAuthBtn
          title={'Create'}
          bgColor={mainColor}
          onClickfun={() => navigation.replace('ChatScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewGroup;

const styles = StyleSheet.create({
  fiilbg: {
    width: w('100%'),
    height: h('100%'),
  },
  textinptrcon: {
    width: w('100%'),
    backgroundColor: mainColor,
    paddingBottom: h('2%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  heading: {
    width: '85%',
    marginVertical: h('2%'),
    color: secColor,
    fontSize: h('2.3%'),
    marginTop: h('3%'),
  },
  memberdiv: {
    width: w('85%'),
    height: h('6%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
