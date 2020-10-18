import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

const Banner = ({ title }) => (
  <Text style={styles.msgtext}>{title}</Text>
);

const linksies = {
  title: "안녕하세요, 할머니! 서정입니다. 좋은 하루 보내세요!",
  youtubeLinks: [ //replace dummy data later
    {
      "id": "bi sohree",
      "title": "rain sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      "url": "https://www.youtube.com/watch?v=jX6kn9_U8qk"
    },
  ]
};

//app passes list of links to LinksList
//LinksList makes a widget for each link
const LinksList = ({ links }) => (
  <ScrollView>
    <View style={styles.linksList}>
      {links.map(link => <Link link={link} />)}
    </View>
  </ScrollView>
)

const getLinkTitle = link => (
  link.id
);


const goToUrl = url => (
  Linking.openURL(url)
);

// a button holding a link (which is all linksies.youtubeLinks)
const Link = ({ link }) => (

  <TouchableOpacity
  style={styles.linkButton}
  onPress={() => goToUrl(link.url)}>
  >
    {/* not sure if want to open new tab or not? maybe it's more confusing */}
    <Text style={styles.linkText}>
      {`${getLinkTitle(link)}`}
    </Text>
  </TouchableOpacity>
);



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={linksies.title} />
      <LinksList links={linksies.youtubeLinks} />
    </SafeAreaView>
  );
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  linkButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff', 
  },

});

export default App;
