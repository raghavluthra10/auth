import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Login from "./pages/Login";
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import Welcome from "./pages/Welcome";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/' exact component={Welcome} />  
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <Route path='/signUp' exact component={SignUpPage}  /> 
          <Route path='/logIn' exact component={Login} /> 
          <Route path='/forgot-password' exact component={ForgotPassword} /> 
          <PrivateRoute path='/update-profile' exact component={UpdateProfile} /> 
        </Switch>
      </AuthProvider>
    </Router>
  
      
     
    </>
  );
}

export default App;
