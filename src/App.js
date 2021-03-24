import Header from "./components/Header/Headers";
import Footer from "./components/Footer/Footer";
import Websites from "./components/Websites/Websites";
import Profile from "./components/Profile/Profile";
import RecentWork from "./components/RecentWork/RecentWork";
import Contact from "./components/Contact/Contact";
import CardView from "./components/Card/CardView";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="App" className="App">
      <Header />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/recent-work">
          <RecentWork />
        </Route>
        <Route
          path="/my-work/:id"
          render={(props) => <CardView {...props} />}
        />
        <Route exact path="/">
          <Websites />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
