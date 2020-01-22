import React, { Fragment } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { ProductConsumer } from "../../context";
import CartTotals from "./CartTotals";
const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <Fragment>
                <Title name='your' title='cart' />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
