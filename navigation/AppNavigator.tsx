import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../store/store';
import TodosScreen from '../screens/TodosScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Todos">
          <Stack.Screen
            name="TodosScreen"
            component={TodosScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TodoDetailsScreen"
            options={{headerTitle: 'Todo Details', headerBackTitle: 'Todos'}}>
            {props => <TodoDetailsScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;
