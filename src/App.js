
import './App.css';
import  LoginPage from'./loginPage/loginPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from './Feed/feed.js';




function App() {
  return (
        <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path ="feed" element={<Feed />}></Route>
          
      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
