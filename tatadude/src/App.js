import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';


import Friends from './pages/Friends';
import RefferalPage from './pages/RefferalPage';

function App() {
  return (
    <div className="App">
   <Navbar/>
    {/* <Friends/> */}
    {/* <RefferalPage/> */}
    <AllRoutes/>
    </div>
  );
}

export default App;
