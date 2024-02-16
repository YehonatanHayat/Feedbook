import './options.css'
import hikes from '../images/hikes.jpg';
import friends from '../images/friends.jpg';
import tv from '../images/tv.jpg';
import calendar from '../images/calendar.jpg';
import glass from '../images/glass.jpg';
import beach from '../images/beach.jpg';
import hotel from '../images/hotel.jpg';
import rest from '../images/rest.jpg';


function Options(){
    return(
    <div>
        <ul class="list-group">
  <li class="list-group-item d-flex align-items-center">
  <img src={tv} alt="Sample" width="35" height="35" />
    <span class="w-10 m-4"> Watch</span>
    
  </li>
  <li class="list-group-item d-flex align-items-center">
  <img src={calendar} alt="Sample" width="25" height="25" />
<span class="w-10 m-4"> Events</span>
    
  </li>
  <li class="list-group-item d-flex align-items-center">
 
  <img src={friends} alt="Sample" width="25" height="25" />
<span class="w-10 m-4"> Friends</span>
    
  </li>
  <li class="list-group-item d-flex align-items-center">
  <img src={glass} alt="Sample" width="25" height="25" />
  <span class="w-10 m-4"> Memories</span>
    
  </li>
</ul>


<hr className="divider" />

<h2 class="shortcuts-title">Shortcuts</h2> 

<ul class="list-group">
  <li class="list-group-item d-flex align-items-center">
  <img src={hikes} alt="Sample" width="35" height="35" />
    <span class="w-10 m-4"> Hikes</span>
    
  </li>
  <li class="list-group-item d-flex align-items-center">
  <img src={beach} alt="Sample" width="35" height="35" />
<span class="w-10 m-4"> Vacations</span>
    
  </li>
  <li class="list-group-item d-flex align-items-center">
 
  <img src={hotel} alt="Sample" width="38" height="38" />
<span class="w-10 m-4"> Hotels</span>
    
  </li>
  <li class="list-group-item d-flex align-items-center">
  <img src={rest} alt="Sample" width="38" height="38" />
  <span class="w-10 m-4"> Restaurant</span>
    
  </li>
</ul>


</div>
    )
}

export default Options;