import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  detail: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const SubHeader = ({ data }) => {
  return (
    <View style={style.detail}>
      <View>
        <Text>Estimate: {data.Estimate}</Text>
        <Text>Customer: {data.customerName}</Text>
        <Text>Address: {data.Address}</Text>
      </View>
      <View>
        <Text>Date: {data.Date}</Text>
        <Text>Mobile: {data.Mobile}</Text>
        <Text>Email: {data.Email}</Text>
      </View>
    </View>
  );
};

export default SubHeader;
