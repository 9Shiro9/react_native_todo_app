import {createSlice} from '@reduxjs/toolkit';

//uuid library giving me errors so I use manual way
const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  return timestamp;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [
      {
        id: 1,
        title: 'Buy groceries',
        description:
          'Visit the grocery store and purchase the items on the shopping list.',
      },
      {
        id: 2,
        title: 'Complete homework',
        description: 'Finish the assignments for math and literature classes.',
      },
      {
        id: 3,
        title: 'Go for a run',
        description:
          'Take a 30-minute jog around the neighborhood to stay active.',
      },
      {
        id: 4,
        title: 'Read a book',
        description:
          'Read the latest novel by your favorite author in the evening.',
      },
      {
        id: 5,
        title: 'Write code',
        description: 'Work on a new feature for the React Native application.',
      },
      {
        id: 6,
        title: 'Call a friend',
        description:
          'Give your friend a call to catch up and make plans for the weekend.',
      },
      {
        id: 7,
        title: 'Learn a new skill',
        description:
          'Start an online course to acquire a new skill, such as learning a programming language or a musical instrument.',
      },
    ],
    filterText: '',
  },
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    addTodo: (state, action) => {
      const newTodo = {
        id: generateUniqueId(),
        title: action.payload.title,
        description: action.payload.description,
      };
      state.data = [...state.data, newTodo];
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const {id, title, description} = action.payload;
      const index = state.data.findIndex(todo => todo.id === id);

      if (index !== -1) {
        state.data[index] = {...state.data[index], title, description};
      }
    },
  },
});

export const {setFilterText, addTodo, removeTodo, editTodo} =
  todosSlice.actions;
export const selectTodos = state => state.todos;
export default todosSlice.reducer;
