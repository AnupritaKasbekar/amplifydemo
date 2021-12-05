import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';
Amplify.configue(awsconfig);
function App() {
  return (
    <div className="App">
      
     <h1>Employee Pension </h1>
     <Link className="btn btn-primary" to="/Create">Create</Link> |
   
     <Link className="btn btn-primary" to="/Update">Update</Link>  |
     <Link  className="btn btn-primary" to="/Delete">Delete</Link>  |
     <Link className="btn btn-primary" to="/Search">Search</Link>  |
     <Link className="btn btn-primary" to="/GetList">Get List</Link> 
     <p>This task will help you to get all the employee data</p>
     <Outlet/>
    </div>
  );
}

export default withAuthenticator(App);
