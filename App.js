import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const Banner = ({ title }) => (
  <Text style={styles.msgtext}>{title}</Text>
);

const IntroMsg = ({ title, msgs }) => (
  <Card style={styles.intromsg}>
    <Card.Title>{title}</Card.Title>
    <Card.Divider />
    <Card.Image source={{ uri: 'https://picsum.photos/700' }} />
    {/* populate 3 buttons */}
    <View style={styles.introMsgsList}>
    {msgs.map(msg => <IntroMsgButton info={msg} />)}
    </View>

  </Card>

);

const IntroMsgButtonTextList = {
  thingies: [
    {
      "msg": "이게 뭐지?"
    },
    {
      "msg": "어떡해 써?"
    },
    {
      "msg": "hi"
    },
  ]
};

const IntroMsgButton = ({ info }) => (
  <Button
    icon={<Icon name='help' color='#ffffff' />}
    buttonStyle={{
      padding: 5,
      width: 120,
      margin: 8
    }}
    title = {info.msg} />
);

const linksies = {
  title: "안녕하세요, 할머니! 서정입니다. 좋은 하루 보내세요!",
  youtubeLinks: [
    {
      "id": "비 소리",
      "title": "rain sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
    {
      "id": "재밌는 음악",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=tKne10WKy34"
    },
    {
      "id": "이거는 뭘까 흠흠",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=VYsqlPUsFkg"
    },
  ]
};

//app passes list of links to LinksList
//LinksList makes a widget for each link
const LinksList = ({ links }) => (
  <ScrollView>
    <View style={styles.linksList}>
      {links.map(link => <Link key={link.url} link={link} />)}
    </View>
  </ScrollView>
)

const getLinkTitle = link => (
  link.id
);

const Link = ({ link }) => (

  <TouchableOpacity
    style={styles.linkButton}
    onPress={() => Linking.openURL(link.url)}>
    <Text style={styles.linkText}>
      {`${getLinkTitle(link)}`}
    </Text>
  </TouchableOpacity>
);



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Banner title={linksies.title} /> */}
      <IntroMsg style={styles.intromsg} title={linksies.title} msgs={IntroMsgButtonTextList.thingies} />
      <LinksList links={linksies.youtubeLinks} />
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    margin: 40,
  },
  msgtext: {
    color: '#000',
    fontSize: 20,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  linksList: {
    ...flexList
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
    backgroundColor: '#66b0ff',
  },
  introMsgsList: {
    ...flexList,
    margin: 20
  }

});

export default App;
