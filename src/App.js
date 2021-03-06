import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import SingleContact from "./components/contacts/SingleContact";
import Header from "./components/layout/Header";
import NotFound from "./components/layout/NotFound";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import About from "./components/About";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/:id" component={SingleContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
