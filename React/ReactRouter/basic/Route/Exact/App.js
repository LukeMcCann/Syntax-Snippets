import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/dashboard">Dashboard</Link>

       <hr />

        // Exact ensures that we only 
        // call the function wihtin the tag 
        // if the path is an exact match. 
        
        // if we added another route /about/test 
        // and called a new test function which
        // returned a test H1 and did not change
        // the about path to be an exact match, 
        // our /about/test route would render
        // both components as it would match
        // both routes. 
        
        // to prevent this we can
        // use the exact keyword.
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/about">
         <About />
       </Route>
       <Route path="/dashboard">
         <Dashboard />
       </Route>


    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
