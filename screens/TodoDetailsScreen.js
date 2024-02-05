import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TodoDetailsScreen = ({route, navigation}) => {
  const {title, description} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
  },
});

export default TodoDetailsScreen;
