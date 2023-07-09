import { Routes , Route} from 'react-router-dom';
import './App.css';
import CoursePage from './Pages/CoursePage';
import HomePage from './Pages/HomePage';
import { UserContextProvider } from './userContext';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import axios from 'axios';
import Layout from './Layout';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route  path='/register' element={<Signup />} />
        <Route  path='/login' element={<Login />} /> 

      </Routes>
    </UserContextProvider>
  );
}

export default App;