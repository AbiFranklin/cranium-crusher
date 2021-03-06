import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './Components/Navbar';
import ExercisesList from './Components/ExercisesList';
import EditExercise from './Components/EditExercises';
import CreateUser from './Components/CreateUser';
import CreateExercises from './Components/CreateExercises';

function App() {
  return (
    <Router>
      <NavigationBar />
      <br />
      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercises} />
      <Route path='/user' component={CreateUser} />
    </Router>
  );
}

export default App;
