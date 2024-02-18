


import Search from './search.js';
import FaceLogo from './faceLogo.js';
import Options from './options.js';
import People from './people.js';
import Icon from './icons.js';
import Card from './card.js';
import Menu from './menu.js';
import Status from './status.js';



function Feed(){

    return(
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
    )
}

export default Feed;