import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
          <Routes>
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
