import "./App.css";
import Home from "./componets/Home";
import Product from "./componets/Products";
import Login from "./componets/Login";
import Header from "./componets/Header";
import Nav from "./componets/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import axios from "axios";


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    axios.get("https://dummyjson.com/products").then((resp) => {
      const products_list = resp.data.products.reverse();
      this.setState({ products: products_list });
    });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product products={this.state.products} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
