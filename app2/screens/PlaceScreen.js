import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BookmarkBtn from "../components/BookmarkBtn.js";

export default class PlaceScreen extends React.Component {
  state = { item: null };

  componentDidMount() {
    const item = this.props.navigation.getParam('item', 'null');
    this.setState({ item });
  }

  render() {
    const { item } = this.state;
    const { navigation } = this.props;
    
    if(item) {
      return (
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image style={styles.backIcon} source={require('../assets/ButtonBack.png')}/>
            </TouchableOpacity>
            <Image style={styles.backImg} source={item.pic}/>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{ item.name }</Text>
            <Text style={styles.address}>{ item.address }</Text>
            <BookmarkBtn />
          </View>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  imgContainer: {
    height: '40%',
    width: '100%',
  },
  backImg: {
    width: '100%',
    height: hp(50),
    position: 'absolute',
    zIndex: -1
  },
  backIcon: {
    marginTop: hp(7),
    marginLeft: wp(4),
  },
  detailContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: Dimensions.get('window').width * 0.045,
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: wp(6),
    marginTop: hp(2.5)
  },
  address: {
    fontSize: wp(4),
    marginTop: hp(1),
    marginBottom: hp(4)
  }
});
