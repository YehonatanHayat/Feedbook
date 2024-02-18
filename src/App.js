
import './App.css';
import FeedPage from './Feed/feed.js';
import  LoginPage from'./loginPage/loginPage.js';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';






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
