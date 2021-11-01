import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from "./pages";
import SignInPage from './pages/sign-in';


function App() {
  return (
    <Router >
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={SignInPage} path="/signin" />
      </Switch>
    </Router>
  );
}

export default App;
