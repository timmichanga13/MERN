import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import EditAuthor from './views/EditAuthor';
import NewAuthor from './views/NewAuthor';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/new">
          <NewAuthor />
        </Route>
        <Route exact path="/edit/:id">
          <EditAuthor />
        </Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;