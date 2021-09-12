import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useParams } from "react-router";

const Home = (props) => {
  return (
    <h1>Welcome!</h1>
  );
}

const Mega = (props) => {
  const { mega, textColor, backgroundColor } = useParams();

  return (
    <div style={{ background: backgroundColor }}>
      <p style={{ color: textColor }}>The {isNaN(mega) ? 'word' : 'number'} you typed is: {mega}.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Practice</h1>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <Switch>
        {/* this is what is typed in teh url */}
        <Route path="/home">
          {/* this is the function that is called (from above/components folder) */}
          <Home />
        </Route>
        {/* basic route, exact to route here ifd it has teh exact match */}
        <Route exact path="/:mega">
          <Mega />
        </Route>
        
        {/* remove exact if you want to make it flexible */}
        <Route exact path="/:mega/:textColor">
          <Mega />
        </Route>

        {/* remove exact if you want to make it flexible */}
        <Route exact path="/:mega/:textColor/:backgroundColor">
          <Mega />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
