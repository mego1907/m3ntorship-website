import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterSec from './components/FooterSec';
import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import { Data } from './Data';
import GlobalStyle from "./GlobalStyle";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from "./Pages/Home";
import Sponsors from './Pages/Sponsors';


function App() {

  
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home {...Data.home} />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
      </Switch>
      <FooterSec />
    </Router>
  );
}

export default App;
