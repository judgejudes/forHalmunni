import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Banner = ({ title }) => (
  <Text style={styles.msgtext}>{title}</Text>
);

const linksies = {
  title: "안녕하세요, 할머니! 서정입니다. 좋은 하루 보내세요!",
  youtubeLinks: [
    {
      "id": "bi sohree",
      "title": "rain sounds",
      // "link"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      // "link"
    },
    {
      "id": "the fun things",
      "title": "river sounds",
      // "link"
    }
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

const Link = ({ link }) => (
  <TouchableOpacity style={styles.linkButton}>
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
