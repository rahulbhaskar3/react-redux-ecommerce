import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory()

const Navigation = (props) => {
    const bagItemCount = useSelector(state => state.bagItem.bagItem.length);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">React App</NavLink>
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
                    <li activeClassName="active" className="nav-item">						
                    <NavLink className="nav-link" to="/bag">Bag({bagItemCount})</NavLink>
                    </li>						  
                </ul>				
            </div>  		  
		</nav>	
    );
}

export default Navigation;