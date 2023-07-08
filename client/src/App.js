import { Routes , Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import axios from 'axios';
import { UserContextProvider } from './userContext';
import Login from './Pages/Login'
import Signup from './Pages/Signup'

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route index path='/register' element={<Signup />} />
        <Route index path='/login' element={<Login />} /> 

      </Routes>
    </UserContextProvider>
  );
}

export default App;