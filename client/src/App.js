<<<<<<< HEAD
// import React from 'react';
// import Dashboard from './components/Dashboard';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
 
// function App(){
 
//         return (
//         //     <div>
//         //         <Navbar/>
//         //         <div class="container-fluid" id="main">
//         //          <div class="row row-offcanvas row-offcanvas-left">
//         //            <Sidebar/>
//         //           <Dashboard/>
                
//         //      </div>
//         //     </div>  
//         // </div>  
//         );
//     }
  
// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
=======
>>>>>>> 9b409a4adfbe4b26074cbf330fbe159f275cb52b
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
<<<<<<< HEAD

=======
        <Route path='/course' element={<CoursePage />} />
>>>>>>> 9b409a4adfbe4b26074cbf330fbe159f275cb52b
      </Routes>
    </UserContextProvider>
  );
}

export default App;