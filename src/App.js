import './App.css';
import MyRoutes from "./routes/MyRoutes";
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  
  return (
    <Provider store={store}>
      <div>
        <MyRoutes />
      </div>
    </Provider>
      );
}

export default App;
