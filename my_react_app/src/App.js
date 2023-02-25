import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';
import { Login } from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <>

    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<RequireAuth loginPath='/login'><>Hello</></RequireAuth>}/>      
      <Route path="/claims" element={<RequireAuth loginPath='/login'><>Claims</></RequireAuth>}/>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
