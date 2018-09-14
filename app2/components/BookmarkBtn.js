import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class BookmarkBtn extends React.Component {
  state = { isBookmarked: true }

  render() {
    let name = this.state.isBookmarked ? "Bookmarked" : "Bookmark";
    let style = this.state.isBookmarked ? styles.marked : styles.unmarked;
    let check = this.state.isBookmarked ?
    <Image
      style={styles.check}
      source={require('../assets/IconCheckmark.png')}
      /> : null;

    return (
      <TouchableOpacity
        title={name}
        style={[ styles.bookmarkBtn, style ]}
        onPress={() => this.setState({ isBookmarked: !this.state.isBookmarked })}
        >
         { check }
         <Text style={styles.btnText}>{ name }</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bookmarkBtn: {
    width: wp(47),
    shadowOpacity: 0.25,
    shadowRadius: Dimensions.get('window').width * 0.025,
    height: hp(5.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: Dimensions.get('window').width * 0.025,
  },
  marked: {
    backgroundColor: '#28BD14',
    shadowColor: '#28BD14',
  },
  unmarked: {
    backgroundColor: '#0601CD',
    shadowColor: '#0601CD',
  },
  btnText: {
    color: 'white'
  },
  check: {
    marginRight: wp(2)
  }
});
