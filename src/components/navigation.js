import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory()

const Navigation = (props) => {
    // console.log(history.location.pathname);
    // const homeClass = history.location.pathname === "/" ? "nav-item active" : "nav-item";
    // const productsClass = history.location.pathname.match(/^\/products/) ? "nav-item active" : "nav-item";
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="javascript:void(0)">Demo App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li activeClassName="active" className="nav-item">						
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li activeClassName="active" className="nav-item">						
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>					  
                </ul>				
            </div>  		  
		</nav>	
    );
}

export default Navigation;