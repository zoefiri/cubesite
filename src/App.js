import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

import ReactMarkdown from 'react-markdown'

import store from './store.js'

import './App.scss';
//import RandomCircles from './StyleAux.js';
import SidebarElement from './SidebarElement.js';

function App() {
   const pageContent = store((state) => state.pageContent);
   const updatePageContent = store((state) => state.updatePageContent);
   updatePageContent(`# title \n notTitle more content and more and more more content and more and more more content and more and more more content and more and more more content and more \n ## subtitle\n and more more content and more and more more content and more and more more content and more and more more content and more and more more content and more and more more content and more and more \n## subtitle\n and more more content and more and more more content and more and more more content and more and more more content and more and more more content and more and more more content and more and more \n## subtitle\n and more more content and more and more more content and more and more more content and more and more more content and more and more more content and more and more more content and more and more \n`)

   return (
      <div className="main" id="main">
         <div className="main" id="SideDiv">
            <FontAwesomeIcon icon={faBus} id="SideLogo"/>
            <SidebarElement text="Stuff!" root={true}>
               <SidebarElement text="1:0" indent="40"/>
               <SidebarElement text="1:1" indent="40"/>
               <SidebarElement text="1:2" indent="40"/>
            </SidebarElement>
            <SidebarElement text="Has Two Children" root={true}>
               <SidebarElement text="2:1" indent="40"/>
               <SidebarElement text="2:2" indent="40"/>
            </SidebarElement>
            <SidebarElement text="Standalone Item" root={true}/>
         </div>
         <div className="main" id="MainDiv">
            <div className="main" id="HeaderDiv">
                  <div id="test"/>
               <div id="HeaderImgFill"/> 
               <div id="HeaderImg"> 
                  <img src="https://i.imgur.com/tzZAeQ0.png"/>
               </div>
               <div id="HeaderText">
                  DTX Riders<br/>Connect
               </div>
               {new Array(5).fill().map((_, i) => <div className="HeaderTriangle" id={"HeaderTriangle"+i}></div>)}
            </div>
            <div className="main" id="BodyDiv">
               <ReactMarkdown>{pageContent}</ReactMarkdown>
            </div>
         </div>
      </div>
   );
}

export default App;
