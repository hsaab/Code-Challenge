import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    const { navigation } = this.props;
    const address = item.address.split(",");
    const street = address[0].trim();
    const city = address[1].trim() + ", " + address[2].trim();
    
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.push("PlaceScreen", { item })}
        >
        <Image style={styles.profpic} source={item.pic}/>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{street}</Text>
            <Text style={styles.address}>{city}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginBottom: hp(2)
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: wp(4),
    width: wp('60%'),
  },
  profpic: {
    width: wp(23),
    height: hp(11),
    resizeMode: 'cover',
    marginLeft: wp(4),
    borderRadius: Dimensions.get('window').width * 0.015
  },
  name: {
    fontSize: wp(5),
    fontWeight: '500'
  },
  addressContainer: {
    width: '70%',
    marginTop: hp(1)
  },
  address: {
    lineHeight: hp(2.75)
  }
});
