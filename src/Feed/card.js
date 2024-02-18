
import './card.css';

import photo from '../images/photo.jpg';
import tag from '../images/tag.jpg';
import feelings from '../images/feelings.jpg';

function Card(){
    return(
        <div>
        <div class="card">
  <div class="card-body">
  <div className="search-container">
      <input type="text" className="search-input1" placeholder="What's on your mind?" />
      
    </div>
    
  </div>
  
  {/* <hr className="divider1" /> */}
</div>



<ul class="list-group list-group-horizontal">
  <li class="list-group-item">
    <button class="btn-item">
      <img src={photo} alt="Sample" width="20" height="20" />
      <span class="w-10 m-4"> Photo/Video</span>
    </button>
  </li>
  <li class="list-group-item">
    <button class="btn-item">
      <img src={tag} alt="Sample" width="20" height="20" />
      <span class="w-10 m-4"> Tag Friends</span>
    </button>
  </li>
  <li class="list-group-item">
    <button class="btn-item">
      <img src={feelings} alt="Sample" width="20" height="25" />
      <span class="w-10 m-4"> Feelings/Activity</span>
    </button>
  </li>
</ul>


</div>

    )
}

export default Card;