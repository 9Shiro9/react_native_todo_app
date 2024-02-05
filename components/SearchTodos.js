import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterText, selectTodos} from '../slices/todoSlice';

const SearchTodosInput = () => {
  const dispatch = useDispatch();
  const {filterText} = useSelector(selectTodos);

  const handleInputChange = text => {
    dispatch(setFilterText(text));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Todos"
        onChangeText={handleInputChange}
        value={filterText}
        autoFocus={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    fontSize: 20,
  },
});

export default SearchTodosInput;
