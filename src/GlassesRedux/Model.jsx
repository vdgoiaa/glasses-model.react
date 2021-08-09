import React, { Component } from "react";
import { connect } from "react-redux";
import "./model.css";

class Model extends Component {
  render() {
    // const {type}=this.props.selectedProduct;
    return (
      <div className="body_model">
        <div className="model">
          <img src="./assets/img/model.jpg" alt="" />
        </div>
        <div className="model1">
          <img src={this.props.selectedProduct.glass} alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.products.selectedProduct,
  };
};

export default connect(mapStateToProps)(Model);

// style={{
//     backgroundImage: "url(./assets/img/model.jpg)",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   }}
