import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './routing/PrivateRoute';
import MyLoader from './components/myLoader/MyLoader';
import MyNavbar from './layouts/myNavbar/Navbar';
import setAuthToken from './reduxConfig/utils/setAuthToken';
const MyHomePage = lazy(() => import('./pages/MyHomePage'));
const MyLogin = lazy(() => import('./pages/MyLogin'));
// Need to add route on navbar if adding a page/controller
const MyDashboard = lazy(() => import('./pages/MyDashboard'));
const Subscribers = lazy(() =>
  import('./controllers/dashboardPages/subscribers/Subscribers')
);
const Projects = lazy(() => import('./controllers/dashboardPages/Projects'));
const Gallerys = lazy(() => import('./controllers/dashboardPages/Gallerys'));
const Settings = lazy(() => import('./controllers/dashboardPages/Settings'));
const Account = lazy(() => import('./controllers/dashboardPages/Account'));
const SendEmail = lazy(() => import('./controllers/dashboardPages/SendEmail'));

const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  if (localStorage.getItem('userInfo')) {
    const item = JSON.parse(localStorage.getItem('userInfo'));
    setAuthToken(item.token);
  }

  // Best tutorial for React-router-dom
  // https://www.youtube.com/watch?v=Ul3y1LXxzdU
  return (
    <BrowserRouter>
      <Suspense fallback={<MyLoader />}>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<MyHomePage />}></Route>
          <Route path='/login' element={<MyLogin />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<MyDashboard />}>
              <Route path='subscribers' element={<Subscribers />} />
              <Route path='gallerys' element={<Gallerys />} />
              <Route path='projects' element={<Projects />} />
              <Route path='settings' element={<Settings />} />
              <Route path='accounts' element={<Account />} />
              <Route path='sendemail' element={<SendEmail />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
