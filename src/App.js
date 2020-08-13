import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Students from "./components/Students";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

function App() {
      return (
          <Container maxWidth="xl">
              <AppBar position="static">
                  <Typography variant="h6">
                      Διαχείριση Μαθητών
                  </Typography>
              </AppBar>

              <Router>
                  <Switch>
                      <Route exact path="/" component={Students} />
                      <Route path="/AddStudent" component={AddStudent}/>
                      <Route path="/EditStudent/:studentId" component={EditStudent}/>
                  </Switch>
              </Router>


          </Container>
    );
}

export default App;
