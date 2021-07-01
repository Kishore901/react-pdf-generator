import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  regards: {
    textAlign: 'center',
  },
  sign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});

const Footer = () => {
  return (
    <View style={style.container}>
      <Text style={style.regards}>Thank You For Your Bussiness</Text>
      <View style={style.sign}>
        <Text>Customer Signature</Text>
        <Text>Executive's SIgnature</Text>
      </View>
    </View>
  );
};

export default Footer;
