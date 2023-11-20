import { StatusBar } from 'expo-status-bar';
import { Navigation } from './navigation';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

export default function App() {
  return (
    <>
      {/* With Context Provider */}
        {/* <FavoritesContextProvider>
          <Navigation />
        </FavoritesContextProvider> */}
      {/* With Redux Store */}
      <Provider store={store}>
        <StatusBar style="auto" />
        <Navigation />
      </Provider>
    </>
  );
}