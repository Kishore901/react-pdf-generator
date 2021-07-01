import React from 'react';
import { Image, StyleSheet, View, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  container1: {
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    marginTop: -20,
    marginLeft: -35,
  },
  timing: {
    textAlign: 'right',
    fontSize: 10,
    fontWeight: 'extrabold',
  },
  description: {
    fontSize: 13,
    marginTop: 15,
    borderBottom: 2,
    borderColor: 'black',
  },
});

const Header = () => {
  return (
    <View style={style.container1}>
      <Image style={style.logo} src="logo.png"></Image>
      <Text style={style.title}>Camera Shop</Text>
      <View style={style.timing}>
        <Text>Service Hours</Text>
        <Text>Mon-Sat</Text>
        <Text>11AM-6PM</Text>
      </View>
      <View>
        <Text style={style.description}>
          SALES AND REPAIR FOR HANDYCAM AND DIGITAL CAMERAS
        </Text>
      </View>
    </View>
  );
};

export default Header;
