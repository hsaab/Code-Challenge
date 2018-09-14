import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ListItem from "../components/ListItem.js";
import { data } from "../components/data.js";

export default class Bookmarks extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Bookmarks</Text>
        </View>
        <View style={styles.listContainer}>
          { data.map((each) => (
            <ListItem
              key={each.name}
              item={each}
              navigation={this.props.navigation}
              />
          )) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "white"
  },
  headerText: {
    fontSize: wp(5.25),
    fontWeight: '400'
  },
  headerContainer: {
    width: '100%',
    height: '13%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  listContainer: {
    width: '95%',
    height: '87%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: hp(4)
  }
});
