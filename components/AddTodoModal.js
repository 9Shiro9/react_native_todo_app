import React, {useState} from 'react';
import {
  Button,
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
import {addTodo} from '../slices/todoSlice';

const AddTodoModal = ({showModal, handleShowModal}) => {
  const dispatch = useDispatch();
  const [addTodoTask, setAddTodoTask] = useState('');
  const [addTodoDescription, setAddTodoDescription] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo({title: addTodoTask, description: addTodoDescription}));
    setAddTodoTask('');
    setAddTodoDescription('');
    handleShowModal();
  };

  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={modalStyles.container}>
        <View style={modalStyles.content}>
          <Text style={modalStyles.title}>Add Todo</Text>
          <TextInput
            style={modalStyles.input}
            placeholder="Todo Task"
            value={addTodoTask}
            onChangeText={text => setAddTodoTask(text)}
          />
          <TextInput
            style={modalStyles.input}
            placeholder="Todo Description"
            value={addTodoDescription}
            onChangeText={text => setAddTodoDescription(text)}
          />
          <View style={modalStyles.buttonContainer}>
            <TouchableOpacity
              style={[modalStyles.button, modalStyles.addButton]}
              onPress={handleAddTodo}>
              <Text style={modalStyles.buttonText}>Add</Text>
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

export default AddTodoModal;

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
  addButton: {
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
