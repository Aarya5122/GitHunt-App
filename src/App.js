import React, { useState } from "react";

//reactstrap, bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//react-toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//context
import UserContext from "./context/UserContext";

//firebase
import { initializeApp } from "firebase/app"
import "firebase/auth"

//firebase configuration
import firebaseConfig from "./config/firebaseConfig";

//react-router-dom v5.3
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

//pages
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

//layout
import Footer from "./layout/Footer";
import Header from "./layout/Header";

//Initialize Firebase
initializeApp(firebaseConfig)

const App = () => {

  const [user, setUser] = useState(null) //null coz {} is true  i.e it's not falsy value

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ToastContainer/>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer/>
      </Router>
    </UserContext.Provider>
  );

}

export default App;
