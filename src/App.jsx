import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function Navbar() {
  const items = useSelector((state) => state.cart.items);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <Link className="brand" to="/">
        Paradise Nursery
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/plants">
          Plants
        </Link>

        <Link to="/about">
          About Us
        </Link>

        <Link className="cart-link" to="/cart">
          🛒 Cart

          <span className="cart-badge">
            {cartCount}
          </span>
        </Link>

      </div>
    </nav>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">

      <section className="hero">

        <div className="hero-overlay">

          <p className="eyebrow">
            Welcome to Paradise Nursery
          </p>

          <h1>
            Paradise Nursery
          </h1>

          <p className="hero-text">
            Discover beautiful houseplants that make your
            home greener, healthier, and happier.
          </p>

          <Link
            className="primary-button"
            to="/plants"
          >
            Get Started
          </Link>

        </div>

      </section>

    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

      </Routes>
    </>
  );
}
