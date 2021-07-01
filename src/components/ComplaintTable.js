import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 50,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    borderBottom: 1,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  col1: {
    width: '15%',
    borderRight: 1,
    paddingLeft: 4,
  },
  col2: {
    width: '85%',
    paddingLeft: 4,
  },
});

const ComplaintTable = ({ data }) => {
  return (
    <View style={style.container}>
      <View style={style.row1}>
        <Text style={style.col1}>Nature of Complaint</Text>
        <Text style={style.col2}>Broken</Text>
      </View>
      <View style={style.row2}>
        <Text style={style.col1}>Remark</Text>
        <Text style={style.col2}>{data.remark}</Text>
      </View>
    </View>
  );
};

export default ComplaintTable;
