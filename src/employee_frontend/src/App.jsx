import { useState } from 'react';
import {BrowserRouter, Route,RouterProvider,Routes,} from "react-router-dom"
import WelcomePage from './pages/Welcomepage';
import HomePage from './pages/Homepage';
import CreateComapny from './pages/CreatePage';
import AddEmployee from './pages/AddEmployees';
import ViewComapny from './pages/Viewcomapny';
import ViewEmploye from './pages/ViewEmployee';
import { AuthProvider } from './auth/auth';
import AssignsTaks from './pages/Assignstasks';
function App() {
  const [greeting, setGreeting] = useState('');

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/create' element={<CreateComapny/>}/>
        <Route path='/addemployee/:name' element={<AddEmployee/>}/>
        <Route path='/view/:name' element={<ViewComapny/>}/>
        <Route path='/employee/:id/:name' element={<ViewEmploye/>}/>
        <Route path='/assignstasks/:id/:name' element={<AssignsTaks/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
