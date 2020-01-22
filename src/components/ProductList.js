import React, { Component, Fragment } from "react";
// eslint-disable-next-line
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='out' title='products' />
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
      // <Product />
    );
  }
}

export default ProductList;
