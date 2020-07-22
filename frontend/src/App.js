import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import JournalEntries from "./components/journal-entries.component";
import EditJournal from "./components/edit-journal.component";
import CreateJournal from "./components/create-journal.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={JournalEntries} />
        <Route path="/edit/:id" component={EditJournal} />
        <Route path="/create" component={CreateJournal} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;