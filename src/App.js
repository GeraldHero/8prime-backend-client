import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './layouts/myNavbar/Navbar';
import MyLoader from './components/myLoader/MyLoader';
import MyHomePage from './pages/MyHomePage';
import MyDashboard from './pages/MyDashboard';
import MyLogin from './pages/MyLogin';

function App() {
  return (
    <BrowserRouter>
      <main>
        <MyNavbar />
        <Suspense fallback={<MyLoader />} />
        <Routes>
          <Route path='/' element={<MyHomePage />}></Route>
          <Route path='/login' element={<MyLogin />}></Route>
          <Route path='/dashboard' element={<MyDashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
