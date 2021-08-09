import React, { Component } from "react";
import { connect } from "react-redux";
import createAction from "../store/actions";

class ProductItem extends Component {
  handleTryGlasses = () => {
    this.props.dispatch(
      createAction("SELECTED_PRODUCT", {
        type: this.props.prod.type,
        url: this.props.prod.url,
      })
    );
  };
  render() {
    const { name, url, desc } = this.props.prod;
    return (
      <div className="card mb-3 px-2">
        <img src={url} alt="productImg" className="card-img-top" />
        <div className="card-body">
          <h2 className="lead">{name}</h2>
          <p>{desc}</p>
          <button onClick={this.handleTryGlasses} className="btn btn-success">
            Thử
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
