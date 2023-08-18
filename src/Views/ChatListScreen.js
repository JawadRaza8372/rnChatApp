import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {w, h} from 'react-native-responsiveness';
import HomeScreenHeader from '../Components/HomeScreenHeader';
import ChatRoomItem from '../Components/ChatRoomItem';
import CustomModal from '../Components/CustomModal';
import {inActiveColor, mainColor, secColor} from '../AppColors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ChatListScreen = ({navigation}) => {
  const data = [
    {id: '21', name: 'Jawad', lastmsg: 'I am good'},
    {id: '12', name: 'Hamad', lastmsg: 'Thanks Man'},
    {id: '343', name: 'Umer', lastmsg: 'good'},
  ];
  const groupdata = [
    {id: '23', name: 'Friends Forever', lastmsg: 'I am good'},
    {id: '14', name: 'Chemistry Class', lastmsg: 'Thanks Man'},
    {id: '353', name: 'Physics Class', lastmsg: 'good'},
  ];
  const manuitems = [
    {
      label: 'Profile',
      pressFunct: () => navigation.navigate('ProfileScreen'),
    },
    {label: 'Logout', pressFunct: () => alert('Logout')},
  ];
  const [modalVisible, setmodalVisible] = useState(false);
  const [searchModal, setsearchModal] = useState(false);
  const [searchTxt, setsearchTxt] = useState('');
  const filteredData = () => {
    const newdata = [...data, ...groupdata];
    const filtrd = newdata?.filter(dat =>
      `${dat?.name}`.toLowerCase().includes(searchTxt.toLowerCase()),
    );
    return filtrd;
  };
  const [isChats, setisChats] = useState(true);
  return (
    <SafeAreaView style={styles.bgdiv}>
      <HomeScreenHeader
        title={'Chat Rocket'}
        ismoreFunc={() => setmodalVisible(!modalVisible)}
        isSearchFun={() => setsearchModal(!searchModal)}
      />
      <View style={{width: '100%', flex: 1}}>
        <View style={styles.groupTopBardiv}>
          <TouchableOpacity
            onPress={() => setisChats(true)}
            style={{
              ...styles.partBtn,
              backgroundColor: isChats ? secColor : 'transparent',
            }}>
            <Text
              style={{
                ...styles.partBtnTxt,
                color: isChats ? mainColor : inActiveColor,
                fontWeight: isChats ? 'bold' : 'normal',
              }}>
              Chats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setisChats(false)}
            style={{
              ...styles.partBtn,
              backgroundColor: isChats ? 'transparent' : secColor,
            }}>
            <Text
              style={{
                ...styles.partBtnTxt,
                color: isChats ? inActiveColor : mainColor,
                fontWeight: !isChats ? 'bold' : 'normal',
              }}>
              Groups
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: secColor,
            paddingTop: h('2%'),
            position: 'relative',
          }}>
          <View style={styles.addBtnContainer}>
            <TouchableOpacity
              onPress={() => {
                isChats
                  ? navigation.navigate('NewMsg')
                  : navigation.navigate('NewGroup');
              }}
              style={styles.addBtnCircle}>
              <Ionicons name="add" size={h('4.5%')} color={secColor} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={isChats ? data : groupdata}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChatScreen')}>
                  <ChatRoomItem name={item.name} lastmsg={item.lastmsg} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <CustomModal
        data={manuitems}
        modalval={modalVisible}
        changeVal={() => setmodalVisible(!modalVisible)}
      />
      <Modal
        visible={searchModal}
        onRequestClose={() => setsearchModal(!searchModal)}>
        <View style={{width: '100%', flex: 1}}>
          <View style={styles.searchContainer}>
            <View style={styles.smallContainer}>
              <TouchableOpacity
                style={styles.backbutton}
                onPress={() => setsearchModal(!searchModal)}>
                <Entypo name="chevron-left" size={w('8%')} color={secColor} />
              </TouchableOpacity>
              <TextInput
                style={styles.searchInputCont}
                placeholder="Search by name"
                placeholderTextColor={secColor}
                value={searchTxt}
                onChangeText={text => {
                  setsearchTxt(text);
                }}
              />
            </View>
          </View>
          <FlatList
            data={filteredData()}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChatScreen')}>
                  <ChatRoomItem name={item.name} lastmsg={item.lastmsg} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  bgdiv: {
    width: '100%',
    height: '100%',
  },
  addBtnContainer: {
    position: 'absolute',
    top: h('70%'),
    right: w('2%'),
    height: h('8%'),
    backgroundColor: 'transparent',
    marginBottom: h('2%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'center',
    overflow: 'hidden',
    zIndex: 2,
  },
  groupTopBardiv: {
    width: '100%',
    height: h('7%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  partBtn: {
    width: '45%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: h('2%'),
    borderTopRightRadius: h('2%'),
  },
  partBtnTxt: {
    fontSize: h('2.5%'),
  },
  searchInputCont: {
    height: '100%',
    flex: 1,
    color: secColor,
    fontSize: h('2.3%'),
  },
  msgCont: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
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
  searchContainer: {
    width: '100%',
    alignSelf: 'center',
    height: h('7%'),
    backgroundColor: mainColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: h('1%'),
  },
  smallContainer: {
    width: '95%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addBtnCircle: {
    height: h('8%'),
    width: h('8%'),
    backgroundColor: mainColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: h('8%'),
  },
});
