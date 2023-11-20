import { StatusBar } from 'expo-status-bar';
import { Navigation } from './navigation';
import FavoritesContextProvider from './store/context/favorites-context';

export default function App() {
  return (
    <>
      <FavoritesContextProvider>
        <Navigation />
      </FavoritesContextProvider>
    </>
  );
}