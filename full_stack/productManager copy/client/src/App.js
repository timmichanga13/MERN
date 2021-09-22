import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import NewProduct from './views/NewProduct';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/products">
          <Main />
        </Route>
        <Route exact path="/new">
          <NewProduct />
        </Route>
        <Route exact path="/products/:id/edit">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;