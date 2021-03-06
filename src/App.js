import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/AboutPage/About/About';
import Contact from './components/ContactPage/Contact/Contact';
import Doctors from './components/Doctors/Doctors';
import Home from './components/HomePage/Home/Home';
import ServiceDetails from './components/HomePage/Services/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors />
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
