import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from "./components/contect/Home";
import About from "./components/contect/About";
import Services from "./components/contect/Services";
import Contact from "./components/contect/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <h1 className="text-3xl text-red-900 font-bold underline">
      Hello world!
    </h1>
  </div>
  )
}

export default App;
