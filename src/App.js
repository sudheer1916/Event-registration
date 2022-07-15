import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Eventpage from './components/Eventpage'
import Login from './components/Login';
import RegistrationForm from './components/Register'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Homepage/>} />
          <Route exact path='/events' element={<Eventpage/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<RegistrationForm/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
