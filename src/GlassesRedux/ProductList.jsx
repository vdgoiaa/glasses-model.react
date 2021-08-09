import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.products.map((item) => {
      return (
        <div key={item.id} className="col-3">
          <ProductItem prod={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div classname="container-fluild">
        <div className="row">
          {/* <div className="col-3">
            <ProductItem />
          </div> */}
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.productList,
  };
};

export default connect(mapStateToProps)(ProductList);
