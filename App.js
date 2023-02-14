
import * as React from 'react';
import TodoApp from './screens/TodoApp';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Import Redux
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading View</Text>} persistor={persistor}>
        <TodoApp/>
      </PersistGate>
    </Provider>
  );
}

export default App;

