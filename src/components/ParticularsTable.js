import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  container: {
    marginTop: 24,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    borderBottomWidth: 1,
    textAlign: 'left',

    // paddingHorizontal: 10,
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    borderBottomWidth: 1,
    textAlign: 'left',
  },
  s: {
    width: '10%',
    borderRight: 1,
    paddingLeft: 4,
  },
  particular: {
    width: '30%',
    borderRight: 1,
    paddingLeft: 4,
  },
  model: {
    width: '30%',
    borderRight: 1,
    paddingLeft: 4,
  },
  serial: {
    width: '30%',
    paddingLeft: 4,
  },
});

const ParticularsTable = ({ data }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.s}>S.No.</Text>
        <Text style={style.particular}>Particulars</Text>
        <Text style={style.model}>Model</Text>
        <Text style={style.serial}>Serial No.</Text>
      </View>
      {data.items.map((item, index) => (
        <View style={style.rows}>
          <Text style={style.s}>{index + 1}</Text>
          <Text style={style.particular}>{item.item}</Text>
          <Text style={style.model}>{item.model}</Text>
          <Text style={style.serial}>{item.serialNo}</Text>
        </View>
      ))}
    </View>
  );
};

export default ParticularsTable;
