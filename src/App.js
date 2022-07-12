import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

import './App.scss';
import RandomCircles from './StyleAux.js';

function App() {
   return (
      <div className="main" id="main">
         <div className="main" id="SideDiv">
            <FontAwesomeIcon icon={faBus} id="SideLogo"/>
            side
         </div>
         <div className="main" id="MainDiv">
            <div className="main" id="HeaderDiv">
                  <div id="test"/>
               <div id="HeaderImgFill"/> 
               <div id="HeaderImg"> 
                  <img src="https://www.dcta.net/sites/default/files/styles/desktop_page_image/public/2018-08/DCTA_Bus_Stop_Talent_External_124.jpg?itok=4PZhierV"/>
                  <div id="HeaderMask">
                     <RandomCircles orientation="bottom" quantity={18} bound={50} minRad={25} maxRad={50}/>
                  </div>
               </div>
               <div id="HeaderText">
                  DTX Riders<br/>Connect
               </div>
               {new Array(5).fill().map((_, i) => <div className="HeaderTriangle" id={"HeaderTriangle"+i}></div>)}
            </div>
            <div className="main" id="BodyDiv">
               body-start
               {new Array(5*10).fill(<div>a</div>)}
               body-end
            </div>
         </div>
      </div>
   );
}

export default App;
