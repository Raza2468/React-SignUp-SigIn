import './App.css';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HomeDashboard } from './Components/Dashboard/HomeDashboard';




function App() {
  return (
    // <div>
      
    // </div>
    <Router>
      <div>

        <Routes>
          <Route path='/' exact element={<SignUp />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/dashboard' exact element={<HomeDashboard />} />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
