
import './App.css';
import { Login } from './login';

import { Route, Routes } from 'react-router-dom';
import { Reset } from './Reset';
import { Home } from './Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/reset" element={< Reset/>} />
        <Route path="/home" element={< Home/>} />
      </Routes>
    
    </div>
  );
}

export default App;
