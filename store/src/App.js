import './App.css';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import { provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <provider store = {store}>
    <div>
    {/* <Login /> */}
    <LoginForm />
    </div>
    </provider>
  );
}

export default App;
