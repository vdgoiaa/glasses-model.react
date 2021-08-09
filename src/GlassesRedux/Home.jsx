import React, { Component } from "react";
import Model from "./Model";
import ProductList from "./ProductList";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div
        className="home"
        style={{
          backgroundImage: "url(./assets/img/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="header">
          <h2>TRY GLASSES APP ONLINE</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Model />
            </div>
            <div className="col-12">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
