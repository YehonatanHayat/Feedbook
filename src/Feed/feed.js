


// import Search from './search.js';
// import FaceLogo from './faceLogo.js';
// import Options from './options.js';
// import People from './people.js';
// import Icon from './icons.js';
// import Card from './card.js';
// import Menu from './menu.js';
// import Status from './status.js';



// function Feed({users}){

//     return(
//         <div class="container text-center">
//         <div class="row row-cols-auto">
//           <div class="col"> 
//             <Search/>
//             <FaceLogo/>
//             <Options/></div>
//           <div class="col-5"><Icon/> <Status/> <Card/>   </div>
//           <div class="col"> <Menu/> <People/>  </div>
          
//         </div>
//       </div>
//     )
// }

// export default Feed;


import Search from './search.js';
import FaceLogo from './faceLogo.js';
import Options from './options.js';
import People from './people.js';
import Icon from './icons.js';
import Card from './card.js';
import Menu from './menu.js';
import Status from './status.js';
import { useLocation } from 'react-router-dom';

function Feed() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div class="container text-center">
      <div class="check"> {user.name} </div>
      <div class="row row-cols-auto">
        <div class="col">
          <Search />
          <FaceLogo />
          <Options />
        </div>
        <div class="col-5">
          <Icon /> <Status /> <Card />
        </div>
        
        <div class="col">
          <Menu /> <People />
        </div>
      </div>
    </div>
  );
}

export default Feed;
