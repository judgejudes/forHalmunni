import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Card, Button, Icon, Overlay, Image } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import { linksies } from './linksies';

const Banner = ({ title }) => (
  <Text style={styles.msgtext}>{title}</Text>
);


const IntroMsg = ({ title, msgs }) => (
  <Card 
  style={{
    backgroundColor: "#b7b7a4",
    padding: 0,
    margin: 0
  }}
  containerStyle={{width: 900, margin: 'auto'}}>
    <Card.Title style={styles.msgtext}>{title}</Card.Title>
    {/* <Card.Divider /> */}
    <Card.Image style={styles.introPic} source={{ uri: require('./img/namsan.JPG') }} />
    <View style={styles.introMsgsList}>
      {msgs.map(msg => <IntroMsgButton info={msg} />)}
    </View>

  </Card>

);

const IntroMsgButtonTextList = {
  thingies: [
    {
      "msg": "이게 뭐지?",
      "description": "할머니 위에 제가 이 웹사이트 만들었슴니다. 할머니가 가장 좋아하는 음악, 영상, 웹사이트, 모든가 다 여기 놨습니다. 새어운 패이브렛 것들이 여기 없으면, 저 서정이 한테 카톡 보내세요!",
      "image": './img/grandma_and_me.HEIC'
    },
    {
      "msg": "어떻게 쓰지?",
      "description": "초록세 버튼 누르세요! 혹시나 또 여기 돌아 오고 싶으면, 꼭대기에서 '할머니 위에'를 누르세요",
      "image": './img/flower.jpg'
    },
  ]
};

const IntroMsgButton = ({ info }) => {
  // const learnMore = (description) => {
  //   console.log(description);
  // }

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
    {/* intro msg button styling */}
    <Button
      icon={<Icon name='help' color='#ffffff' />}
      buttonStyle={{
        padding: 5,
        // light brown color
        backgroundColor: "#cb997e",
        padding: 5,
        margin: 8,
        borderRadius: 15
      }}
      title={info.msg}
      titleStyle={{
        fontSize: 35
      }}
      onPress={toggleOverlay}
    />

    <Overlay 
    ModalComponent={Modal} 
    isVisible={visible} 
    onBackdropPress={toggleOverlay}
    overlayStyle={styles.overlayStyle}
    >
      <Text style={styles.modalText}>{info.description}</Text>
      {/* <Image source={{ uri:require('./img/grandma_and_me.HEIC')}}/> */}


    </Overlay>
    </View>
  );
};

const MsgToHalmunni = {
  title: "할머니 위에서 만든 페이지",
}


const GroupOfLinks = ({ groups }) => (
  // ex. (groups: music, sounds, etc.)
  <View style={styles.group}>
    {groups.map(group => <LinksList links={group.links} title={group.title} />)}
  </View>
);

//GroupOfLinks passes a group, like "sounds" or "music" to LinksList 
//app passes list of links to LinksList
//LinksList makes a widget for each link
// LinksList passes each link to Link (where the button is made)
const LinksList = ({ links, title }) => (
  <ScrollView>
    {/* music, sounds, etc. */}
    <View style={styles.linksList}>
      <Text style={styles.msgText2}>{title}</Text>
      {/* i want flex to start from JUST the links, not the title */}
      <View style={styles.linksListFlex}>
     {links.map(link => <Link key={link.url} link={link} />)}
     {/* TO DO: image={link.img} */}
     </View>
    </View>
  </ScrollView>
)

const getLinkTitle = link => (
  link.id
);

// one single link
const Link = ({ link }) => (
  // to do: just use Button from React Native Elements
  <Button
    buttonStyle={{
      backgroundColor: '#a5a58d',
      // olive green
      margin: 10,
      borderRadius: 15
    }}
    onPress={() => Linking.openURL(link.url)}
    title={`${getLinkTitle(link)}`}
    titleStyle={{
      fontSize: 25,
    }}
  />
);



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <IntroMsg style={styles.intromsg} title={MsgToHalmunni.title} msgs={IntroMsgButtonTextList.thingies} />
      <GroupOfLinks groups={linksies} />

    </SafeAreaView>
  );
}

const flexList = {
  flex: 3,
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 0,
    // margin: 40,
    backgroundColor: '#f0efeb'
  },
  msgtext: {
    color: '#000',
    fontSize: 35,
  },
  text: {
    color: '#000',
    fontSize: 35,
  },
  linksList: {
    // ...flexList,
    backgroundColor: '#eddcd2', //light peach
    margin: 30,
    textAlign: 'center',
    paddingTop: 20,
    // width: 1200,
    // to do: ask for feedback, change up the width, make this a flex-container for all categories
    borderRadius: 30,
  }, 

  linksListFlex: {
    ...flexList,
    borderRadius: 5,
    margin: 30,
    // width: 40
    justifyContent: 'center',
    // flex: 3
  },
  msgText2: { 
    //styling for "videos"
    backgroundColor: '#cb997e',
    fontSize: 30,
    padding: 10,
    borderRadius: 15,
  },
  linkButton: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#eddcd2',
  },
  introMsgsList: {
    ...flexList,
    marginTop: 20,
    justifyContent: "center",
    fontSize: 35
    // fontSize is not working

  },
  intromsg: {
    backgroundColor: '#b7b7a4'
  },
  // intromsg: {
  //   // this isn't working...how can i make a card better? or maybe...don't use a card?
  //   width: 5000,
  //   height: 5000
  // },
  group: {
    ...flexList,
    // padding: 10,
    margin: 10
    // backgroundColor: 'yellow'
  },
  introPic: {
    height: 500,
    width: 500,
    margin: 'auto'
  },
  modalText: {
    fontSize: 30
  },
  overlayStyle: {
    width: 600,
    textAlign: 'center'
  }

});

export default App;
