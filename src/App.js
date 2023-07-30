import './App.css';
import Headers from './components/common/heading/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <Headers />
        <switch>
          {/* <Route path='/'>
            Home
          </Route>
          <Route path='/about'>
            About
          </Route>
          <Route path='/services'>
            Services
          </Route>
          <Route path='/contact'>
            Contact
          </Route> */}
        </switch>
      </Router>
    </>
  );
}

export default App;
