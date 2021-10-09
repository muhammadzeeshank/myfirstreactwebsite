import React from "react";
import NavBar from "./MyComponents/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./MyComponents/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer text="@ 2021. Made with ❤️ by Muhammad Zeeshan." />
    </>
  );
}

export default App;
