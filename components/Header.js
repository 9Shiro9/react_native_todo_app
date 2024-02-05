import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from "../constant/colors"

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
    alignItems: 'center',
    width: 'auto',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.headerTextColor,
  },
});

export default Header;
