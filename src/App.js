import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home/Home';
import ServiceDetail from './Pages/Home/Services/Service/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>
            <PrivateRoute path='/service/:id'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
