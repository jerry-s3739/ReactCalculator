import './App.css'
import KeyRow from './components/NumberKeys/keyRow';
import Login from "./components/Auth/login";
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Login}/>
          <Route exact path="/calc" component={KeyRow} />
        </Router>
       {/* <KeyRow></KeyRow>      */}
    </div>
  );
}

export default App;
