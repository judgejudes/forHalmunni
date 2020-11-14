import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Card, Button, Icon, Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import { linksies } from './linksies';

const Banner = ({ title }) => (
  <Text style={styles.msgtext}>{title}</Text>
);


const IntroMsg = ({ title, msgs }) => (
  <Card style={{
    backgroundColor: "#b7b7a4",
    margin: 300
  }}>
    <Card.Title style={styles.msgtext}>{title}</Card.Title>
    <Card.Divider />
    <Card.Image style={styles.introPic} source={{ uri: require('./img/flowers.jpg') }} />
    <View style={styles.introMsgsList}>
      {msgs.map(msg => <IntroMsgButton info={msg} />)}
    </View>

  </Card>

);

const IntroMsgButtonTextList = {
  thingies: [
    {
      "msg": "이게 뭐지?",
      "description": "This is a website for all of your favorite things on the Internet! Made with love, from Judy"
    },
    {
      "msg": "어떻게 써?",
      "description": "Click on the buttons to watch those videos :)"
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
    <Button
      icon={<Icon name='help' color='#ffffff' />}
      buttonStyle={{
        padding: 5,
        // light brown color
        backgroundColor: "#cb997e",
        padding: 5,
        margin: 8,
      }}
      title={info.msg}
      titleStyle={{
        fontSize: 35
      }}
      // onPress={(info.description) => learnMore(info.description)}
      // onPress={() => console.log('help')}
      onPress={toggleOverlay}
    />

    <Overlay ModalComponent={Modal} isVisible={visible} onBackdropPress={toggleOverlay}>
      <Text>{info.description}</Text>
    </Overlay>
    </View>
  );
};

const MsgToHalmunni = {
  title: "안녕하세요, 할머니! 서정입니다. 좋은 하루 보내세요!",
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
      {links.map(link => <Link key={link.url} link={link} />)}
    </View>
  </ScrollView>
)

const getLinkTitle = link => (
  link.id
);

const Link = ({ link }) => (
  // to do: just use Button from React Native Elements
  <Button
    buttonStyle={{
      backgroundColor: '#a5a58d',
      // olive green
      margin: 10
    }}
    onPress={() => Linking.openURL(link.url)}
    title={`${getLinkTitle(link)}`}
    titleStyle={{
      fontSize: 25
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
  flex: 1,
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
    ...flexList,
    backgroundColor: '#eddcd2', //light peach
    borderRadius: 5,
    margin: 30,
    // width: 40
    justifyContent: 'center',
    // flex: 3
  },
  msgText2: {
    // backgroundColor: '#cb997e',
  },
  linkButton: {
    borderRadius: 5,
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
    // width: 500,
    textAlign: 'center'
  }

});

export default App;
