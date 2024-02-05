import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {editTodo} from '../slices/todoSlice';

const EditTodoModal = ({showModal, handleShowModal, todoData}) => {
  const dispatch = useDispatch();
  const [editTodoTask, setEditTodoTask] = useState(todoData.title);
  const [editTodoDescription, setEditTodoDescription] = useState(
    todoData.description,
  );

  const handleEditTodo = () => {
    dispatch(
      editTodo({
        id: todoData.id,
        title: editTodoTask,
        description: editTodoDescription,
      }),
    );
    handleShowModal();
    setEditTodoTask('');
    setEditTodoDescription('');
  };

  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={modalStyles.container}>
        <View style={modalStyles.content}>
          <Text style={modalStyles.title}>Edit Todo</Text>
          <TextInput
            style={modalStyles.input}
            placeholder="Todo Task"
            value={editTodoTask}
            onChangeText={text => setEditTodoTask(text)}
          />
          <TextInput
            style={modalStyles.input}
            placeholder="Todo Description"
            value={editTodoDescription}
            onChangeText={text => setEditTodoDescription(text)}
          />
          <View style={modalStyles.buttonContainer}>
            <TouchableOpacity
              style={[modalStyles.button, modalStyles.editButton]}
              onPress={handleEditTodo}>
              <Text style={modalStyles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[modalStyles.button, modalStyles.cancelButton]}
              onPress={handleShowModal}>
              <Text style={modalStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditTodoModal;

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    padding: 10,
    width: '100%',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  editButton: {
    width: '30%',
    borderRadius: 10,
    backgroundColor: '#008080',
  },
  cancelButton: {
    borderRadius: 10,
    backgroundColor: 'red',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
});
