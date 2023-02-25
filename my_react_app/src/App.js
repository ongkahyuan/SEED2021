import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';
import { Login } from './components/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<>Hello</>}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="*"></Route> */}
    </Routes>
    </>
  );
}

export default App;
