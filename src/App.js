import './App.css';
import CustomNavBar from "./Components/CustomNavBar";
import CustomFooter from "./Components/CustomFooter";
import Home from "./Components/Home";
import ListProducts from "./Pages/Products/List";
import InsertUpdateProduct from './Components/InsertUpdateProduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/products" component={ListProducts}></Route>
          <Route path="/product/:seqProduct" component={InsertUpdateProduct}></Route>
        </Switch>
        <CustomFooter />
      </Router>
    </div>
  );
}

export default App;