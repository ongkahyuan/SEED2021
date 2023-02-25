import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';
import { Login } from './components/Login';
import NotFound from './components/NotFound';
import { PolicyTable } from './components/policy';
import { ClaimTable } from './components/claims';
import TabBar from './components/Tabbar';

function App() {
  return (
    <>

    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={< TabBar />}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
