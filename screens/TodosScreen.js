import React from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Todo from '../components/Todo';
import SearchTodosInput from '../components/SearchTodos';
import {useSelector} from 'react-redux';
import {selectTodos} from '../slices/todoSlice';
import AddTodo from '../components/AddTodo';

const TodosScreen = () => {
  const {data, filterText} = useSelector(selectTodos);

  const filteredTodos = data.filter(todo =>
    todo.title.toLowerCase().includes(filterText.toLowerCase()),
  );

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  return (
    <View>
      <AddTodo />
      <SearchTodosInput />
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <ScrollView contentContainerStyle={{paddingBottom: 180}}>
          {filteredTodos.map(item => (
            <Todo
              key={item.id}
              title={item.title}
              id={item.id}
              description={item.description}
            />
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TodosScreen;
