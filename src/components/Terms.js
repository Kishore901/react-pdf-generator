import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

const Terms = () => {
  return (
    <View style={style.container}>
      <Text>
        1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum
        laborum quidem! Id, ex velit.
      </Text>
      <Text>
        2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        provident excepturi voluptatem ea tempora praesentium quia aperiam
        repellat optio minus?
      </Text>
      <Text>
        3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit libero nostrum impedit, unde dignissimos dolores!
      </Text>
    </View>
  );
};

export default Terms;
