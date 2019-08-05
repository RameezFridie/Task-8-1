// Import react library from react
import React from 'react';
// import the css stylin file
import './App.css';
// import the Product component to the app
import { Product } from './components/Product'
// import the Header component
import { Header } from './components/Header'
// import the Landing page component
import { Landing } from './components/Landing'
// Run all component pages
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
    return (

        <Router>
            <Header/>
            {/* // Main div that contains all infortmation */}
            <div className = "App">
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/Landing'}>About Us</Link>
                        </li>
                        <li>
                            <Link to='/Product'>Products</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    {/* <Route exact path='/' component={Header}/> */}
                    <Route path='/Landing' component={Landing}/>
                    <Route path='/Product' component={Product}/>
                </Switch>
                {/* <div class = "header" >
                    <Header/>
                </div>
                <div className = "landing" >
                    <Landing/>
                </div>
                <div class = "products" >
                    <Product/>
                </div> */}
            </div>
        </Router>
    );
}

export default App;