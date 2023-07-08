import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
 
function App(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App