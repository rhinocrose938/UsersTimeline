import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
      /* is the navbar component created using Bootstrap library, 
         where we set the link to different routes in the component. 
         On clicking a particular link the user will get directed to the set route. 
         To setup the link we import Link from 'react-router-dom' as above */ 
         
    return (<nav className="navbar navbar-expand-md bg-dark navbar-dark">
             <Link className="navbar-brand" to="/">Navbar</Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" 
                 data-target="#collapsibleNavbar">
                   <span className="navbar-toggler-icon"></span>
               </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
               <ul className="navbar-nav">
                 <li className="nav-item">
                   <Link to="/">Users</Link>
                 </li>
               </ul>
            </div>  
            </nav>)
      }
