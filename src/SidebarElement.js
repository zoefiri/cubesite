import store from './store.js'
import React, { useEffect } from 'react';

function SidebarElement({ children = false, text, action, indent = 0, root = false}) {
   const expanded = store((state) => state.expanded);
   const register = store((state) => state.registerExpanded);
   const toggle = store((state) => state.toggleExpanded);
   useEffect(() => register(text), []);

   let i = 0;

   return (
      <div onClick={ () => toggle(text) }>
         { children ? <br/> : null }
         <div className="SideButton" style={{ left: indent + "px"}}>
            {
               children ? (expanded[text] ? <div className="SideButtonArrowOpen">🢗</div> : <div className="SideButtonArrowClosed">🢖</div>) : null
            }
            <div className="SideButtonText">{text}</div> 
         </div>
         <div className="SideButtonChildren">
            { children ? (expanded[text] ? children.map((child) => ({...child, props: {...child.props, idx:i++}})) : null) : null }
         </div> 
      </div>
   )
}

export default SidebarElement;
