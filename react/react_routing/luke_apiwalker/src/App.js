import DisplayResults from './components/DisplayResults';
import SearchRequest from './components/SearchRequest';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div><h1>Welcome!</h1></div>
      <SearchRequest />
        <Switch>

          <Route exact path="/:category/:id">
            <DisplayResults />
          </Route>

        </Switch>
      </BrowserRouter>
  );
}
export default App;