import React, {useState} from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddTodoModal from './AddTodoModal';
import {colors} from "../constant/colors";

const AddTodo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <TouchableOpacity onPress={handleShowModal} style={styles.container}>
      <AntDesign name="plus" size={20} color="white" style={styles.icon} />
      <Text style={styles.title}>Add Todo</Text>
      <AddTodoModal showModal={showModal} handleShowModal={handleShowModal} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008080',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#008080',
    ...Platform.select({
      android: {
        elevation: 5,
        borderWidth: 0,
      },
      ios: {
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
    }),
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: colors.addTodoTextColor,
    fontSize: 20,
  },
});

export default AddTodo;
