import logo from './logo.svg';
import './App.css';
import TitleCard from './signUp/titleCard.js';
import Title from './signUp/Title.js';
import Email from './signUp/Email.js';
import BirthExplain from './signUp/BirthExplain.js';
import Date from './signUp/MonthSelector.js';
import Search from './Feed/search.js';
import FaceLogo from './Feed/faceLogo.js';
import Options from './Feed/options.js';
import People from './Feed/people.js';
import Icon from './Feed/icons.js';
import Card from './Feed/card.js';
import Menu from './Feed/menu.js';
import Status from './Feed/status.js';



function App() {
  return (
    <div className="App">
      <div class="container text-center">
  <div class="row row-cols-auto">
    <div class="col"> 
      <Search/>
      <FaceLogo/>
      <Options/></div>
    <div class="col-5"><Icon/> <Status/> <Card/>   </div>
    <div class="col"> <Menu/> <People/>  </div>
    
  </div>
</div>

     

      
      {/* <TitleCard/>
      <Email/> 
      <BirthExplain/>
      <Date/> */}
    </div>
  );
}

export default App;
