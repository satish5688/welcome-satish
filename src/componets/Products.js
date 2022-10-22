import React, { Component } from "react";
class Product extends Component {
  render() {
    return (
      <div class="container text-center mt-5">
        <div class="row">
          {this.props.products?.map((product) => {
            return (
              <div key={product.id} className="col-3 mb-3">
                <div class="card">
                  <img
                    width={150}
                    height={250}
                    src={product.thumbnail}
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <div className="d-flex">
                      <p class="card-text fw-bold">{product.title}</p>
                      <b className="ms-auto">${product.price}</b>
                    </div>
                    <span
                      class="d-inline-block text-truncate"
                      style={{ width: 280 }}
                    >
                      {product.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Product;
