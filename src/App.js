import './App.css';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path='/' exact element={<SignUp />} />
          <Route path='/login' exact element={<Login />} />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
