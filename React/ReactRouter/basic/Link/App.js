import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";

// In this example we use the basic router
// As we are not using Route there are no rendering capabilities
// instead, when we click each link (which transaltes to a regular 
// anchor tag with href) the URL will change. 

// React Router supports different types of router
// BrowserRouter is used commonly as it supports
// the best looking URLs, the webserver must however
// be set up correctly to always serve the same page
// despite the URL. 

// Alternatively HashRouter may also be used. 
const App = () => (
  <Router>
    <Link to="/">Root</Link>
    <br />
    <Link to="/test/someTest">Some Test</Link>
    <br />
    <Link to="/test">Test</Link>
    <br />
    <Link to="/test/anotherTest">AnotherTest</Link>
  </Router>
);

export default App;
