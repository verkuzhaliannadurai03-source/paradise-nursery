import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeItem,
  updateQuantity
} from "./CartSlice";

export default function CartItem() {

  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  // Calculate total number of products
  const totalItems = items.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  // Calculate total cart amount
  const totalAmount = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // Empty cart
  if (items.length === 0) {

    return (

      <main className="page-container">

        <section className="empty-cart">

          <h1>
            Your Shopping Cart
          </h1>

          <p>
            Your cart is empty.
            Add some beautiful plants
            to get started.
          </p>

          <Link
            className="primary-button"
            to="/plants"
          >
            Continue Shopping
          </Link>

        </section>

      </main>

    );
  }

  return (

    <main className="page-container cart-page">

      <div className="cart-header">

        <div>

          <p className="eyebrow">
            Your Selection
          </p>

          <h1>
            Shopping Cart
          </h1>

        </div>

        <span className="cart-summary-count">

          {totalItems}

          {" "}

          {totalItems === 1
            ? "item"
            : "items"}

        </span>

      </div>

      <section className="cart-layout">

        <div className="cart-items">

          {items.map((item) => {

            const itemTotal =
              item.price *
              item.quantity;

            return (

              <article
                className="cart-item"
                key={item.id}
              >

                {/* Plant thumbnail */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-item-details">

                  {/* Plant name */}

                  <h2>
                    {item.name}
                  </h2>

                  {/* Unit price */}

                  <p>
                    Unit price:
                    {" "}
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity controls */}

                  <div className="quantity-controls">

                    {/* Decrease */}

                    <button
                      aria-label={
                        `Decrease ${item.name} quantity`
                      }
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity:
                              item.quantity - 1
                          })
                        )
                      }
                    >
                      −
                    </button>

                    {/* Current quantity */}

                    <span>
                      {item.quantity}
                    </span>

                    {/* Increase */}

                    <button
                      aria-label={
                        `Increase ${item.name} quantity`
                      }
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity:
                              item.quantity + 1
                          })
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Delete */}

                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(
                        removeItem(item.id)
                      )
                    }
                  >
                    Delete
                  </button>

                </div>

                {/* Total cost for this plant */}

                <strong className="item-total">

                  ${itemTotal.toFixed(2)}

                </strong>

              </article>

            );
          })}

        </div>

        {/* ORDER SUMMARY */}

        <aside className="cart-total-card">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <span>
              Total Items
            </span>

            <span>
              {totalItems}
            </span>

          </div>

          <div className="summary-row grand-total">

            <span>
              Total Amount
            </span>

            <strong>
              ${totalAmount.toFixed(2)}
            </strong>

          </div>

          {/* Checkout */}

          <button
            className="checkout-button"
            onClick={() =>
              alert(
                "Coming Soon! Checkout will be available soon."
              )
            }
          >
            Checkout
          </button>

          {/* Continue Shopping */}

          <Link
            className="secondary-button"
            to="/plants"
          >
            Continue Shopping
          </Link>

        </aside>

      </section>

    </main>

  );
}
