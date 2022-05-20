import Rutas from './routes';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Rutas />
    </Provider>
  );
}

export default App;
