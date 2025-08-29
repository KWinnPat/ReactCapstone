import { useParams } from "react-router-dom";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import initIcons from "./assets/icons";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Item from "./components/pages/Item";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import "./styles/main.scss";

initIcons();

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/item/:id">
              <Item />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
