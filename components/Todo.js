import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {removeTodo} from '../slices/todoSlice';
import EditTodoModal from './EditTodoModal'; // Import the EditTodoModal component
import {colors} from "../constant/colors"

const Todo = ({title, id, description}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = () => {
    // Show the EditTodoModal when the "Edit" button is pressed
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    // Close the EditTodoModal
    setEditModalVisible(false);
  };

  const handleTodoPress = () => {
    // Navigate to TodoDetails screen with params
    navigation.navigate('TodoDetailsScreen', {title, description});
  };

  return (
    <TouchableOpacity onPress={handleTodoPress}>
      <View style={styles.item}>
        <Text key={id} style={styles.title}>
          {title}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleEditTodo} style={styles.editIcon}>
            <AntDesign name="edit" size={20} color="green" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRemoveTodo} style={styles.trashIcon}>
            <AntDesign name="delete" size={20} color="red" />
          </TouchableOpacity>
        </View>
        {/* EditTodoModal */}
        <EditTodoModal
          showModal={editModalVisible}
          handleShowModal={closeEditModal}
          todoData={{id, title, description}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.taskItemColor,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: colors.taskFontColor,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editIcon: {
    padding: 10,
    marginRight: 10,
  },
  trashIcon: {
    padding: 10,
  },
});

export default Todo;
