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
import ScreenHeader from '../Components/ScreenHeader';
import ChatInfoHead from '../Components/ChatInfoHead';
import MesgSendComp from '../Components/MesgSendComp';
import {w, h} from 'react-native-responsiveness';
import MyMsg from '../Components/MyMsg';
import HomeScreenHeader from '../Components/HomeScreenHeader';
import ChatRoomItem from '../Components/ChatRoomItem';
import CustomModal from '../Components/CustomModal';
import {mainColor, secColor} from '../AppColors';
import Entypo from 'react-native-vector-icons/Entypo';
const ChatListScreen = ({navigation}) => {
  const data = [
    {id: '21', name: 'Jawad', lastmsg: 'I am good'},
    {id: '12', name: 'Hamad', lastmsg: 'Thanks Man'},
    {id: '343', name: 'Umer', lastmsg: 'good'},
  ];
  const manuitems = [
    {
      label: 'Profile',
      pressFunct: () => navigation.navigate('ProfileScreen'),
    },
    {label: 'Logout', pressFunct: () => alert('Logout')},
    {label: 'Theme', pressFunct: () => navigation.navigate('ThemeScreen')},
    {label: 'New Group', pressFunct: () => navigation.navigate('NewGroup')},
    {label: 'New Messages', pressFunct: () => navigation.navigate('NewMsg')},
  ];
  const [modalVisible, setmodalVisible] = useState(false);
  const [searchModal, setsearchModal] = useState(false);
  const [searchTxt, setsearchTxt] = useState('');
  const filteredData = () => {
    const filtrd = data?.filter(dat =>
      `${dat?.name}`.toLowerCase().includes(searchTxt.toLowerCase()),
    );
    return filtrd;
  };
  return (
    <SafeAreaView style={styles.bgdiv}>
      <HomeScreenHeader
        title={'Chat Rocket'}
        ismoreFunc={() => setmodalVisible(!modalVisible)}
        isSearchFun={() => setsearchModal(!searchModal)}
      />
      <View style={{width: '100%', flex: 1}}>
        <FlatList
          data={data}
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
});
