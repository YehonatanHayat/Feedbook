
import './App.css';
import FeedPage from './loginPage/FeedPage.js';
import  LoginPage from'./loginPage/loginPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from './Feed/feed.js';




function App() {
  return (
        <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path ="feed" element={<FeedPage/>}></Route>
          
      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
