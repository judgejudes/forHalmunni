import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Banner = ({title}) => (
  <Text style={styles.text}>{title}</Text>
);

const linksies = {
  title: "안녕하세요, 할머니! 서정입니다",
  youtubeLinks: [
    {
      "id": "Rain Sounds",
      "title": "ult rain sounds yeye",
      // "link"
    },
    {
      "id": "Rain Sounds",
      "title": "ult rain sounds yeye",
      // "link"
    }
  ]
};

//app passes list of links to LinksList
//LinksList makes a widget for each link
const LinksList = ({ links }) => (
  <View style={styles.linksList}>
    { links.map(link => <Link link={link} />) }
  </View>
)

const getLinkTitle = link => (
  link.id
);

const Link = ({link}) => (
  <TouchableOpacity style={styles.linkButton}>
    <Text style={styles.linkText}>
    {`hai ${getLinkTitle(link)}`}
    </Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <View style={styles.container}>
      <Banner title={linksies.title}/>
      <LinksList links={linksies.youtubeLinks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
  }
});

export default App;
