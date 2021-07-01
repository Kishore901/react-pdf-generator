import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  conatiner: {
    marginTop: 30,
    borderWidth: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // flexGrow: 1,
    borderBottomWidth: 1,
    textAlign: 'left',
  },
  col1: {
    width: '30%',
    borderRight: 1,
    paddingLeft: 4,
  },
  col2: {
    width: '20%',
    borderRight: 1,
    paddingLeft: 4,
  },
  col3: {
    width: '30%',
    borderRight: 1,
    paddingLeft: 4,
  },
  col4: {
    width: '20%',
    paddingLeft: 4,
  },
});

const TotalTable = () => {
  return (
    <View style={style.conatiner}>
      <Text style={style.col1}>Estimated Cost:</Text>
      <Text style={style.col2}>750</Text>
      <Text style={style.col3}>Estimated Delivery Time:</Text>
      <Text style={style.col4}>2021-06-23</Text>
    </View>
  );
};

export default TotalTable;
