import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/home/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mission from "./components/mission/Mission";
import ContactUs from "./components/contact/ContactUs";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/contact" component={ContactUs} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
