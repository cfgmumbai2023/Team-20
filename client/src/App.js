import { Routes , Route} from 'react-router-dom';
import './App.css';
import CoursePage from './Pages/CoursePage';
import HomePage from './Pages/HomePage';
// import axios from 'axios';
import { UserContextProvider } from './userContext';

// axios.defaults.baseURL = 'http://localhost:5000/';
// axios.defaults.withCredentials = true;

function App() {
  const data = {
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    description: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    image: "https://img.freepik.com/free-vector/landscape-with-trees-against-sunset-sky_1048-14241.jpg?size=626&ext=jpg",
    instructor: "Test 1",
    rating: 4,
    price: 500,
    duration: 12.5,
    lessons: [
      {
        title: "Completely valid lesson name 1"
      },
      {
        title: "Completely valid lesson name 2"
      },
      {
        title: "Completely valid lesson name 3"
      }
    ]
  }

  return (
    <UserContextProvider>
      <Routes>
        <Route index path='/' element={<HomePage />} /> 
        <Route path='/coursepage' element={<CoursePage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
