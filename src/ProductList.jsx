import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [

  // =========================
  // AIR PURIFYING PLANTS
  // =========================

  {
    id: 1,
    name: "Snake Plant",
    price: 18,
    category: "Air Purifying",
    description:
      "A hardy, low-maintenance plant with tall architectural leaves.",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 2,
    name: "Peace Lily",
    price: 22,
    category: "Air Purifying",
    description:
      "Elegant dark leaves and beautiful white flowers for indoor spaces.",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 3,
    name: "Spider Plant",
    price: 16,
    category: "Air Purifying",
    description:
      "A cheerful classic with arching green and white foliage.",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 4,
    name: "Rubber Plant",
    price: 25,
    category: "Air Purifying",
    description:
      "Glossy leaves and strong growth make this a striking houseplant.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 5,
    name: "Boston Fern",
    price: 20,
    category: "Air Purifying",
    description:
      "A lush fern that adds a soft, tropical feel to your home.",
    image:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 6,
    name: "Areca Palm",
    price: 32,
    category: "Air Purifying",
    description:
      "A graceful tropical palm that brightens indoor corners.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80"
  },

  // =========================
  // SUCCULENTS
  // =========================

  {
    id: 7,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    description:
      "A popular succulent with thick, water-storing leaves.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 8,
    name: "Jade Plant",
    price: 19,
    category: "Succulents",
    description:
      "A compact succulent with rounded leaves and tree-like stems.",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 9,
    name: "Echeveria",
    price: 14,
    category: "Succulents",
    description:
      "A colorful rosette succulent that loves bright indoor light.",
    image:
      "https://images.unsplash.com/photo-1534315042624-47c5a2a3f6d4?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 10,
    name: "Haworthia",
    price: 13,
    category: "Succulents",
    description:
      "A small striped succulent that fits beautifully on desks.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 11,
    name: "String of Pearls",
    price: 24,
    category: "Succulents",
    description:
      "Trailing stems covered with distinctive pearl-shaped leaves.",
    image:
      "https://images.unsplash.com/photo-1597055181300-2f4f9b8b5d3b?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 12,
    name: "Zebra Haworthia",
    price: 17,
    category: "Succulents",
    description:
      "A decorative compact plant with bold white striping.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },

  // =========================
  // FLOWERING PLANTS
  // =========================

  {
    id: 13,
    name: "African Violet",
    price: 21,
    category: "Flowering Plants",
    description:
      "A compact flowering favorite with vibrant blooms.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 14,
    name: "Anthurium",
    price: 28,
    category: "Flowering Plants",
    description:
      "A tropical plant known for glossy leaves and bright flowers.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 15,
    name: "Orchid",
    price: 35,
    category: "Flowering Plants",
    description:
      "An elegant flowering plant that creates a sophisticated display.",
    image:
      "https://images.unsplash.com/photo-1566907225470-4f6e3f9e4c75?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 16,
    name: "Begonia",
    price: 23,
    category: "Flowering Plants",
    description:
      "A colorful indoor plant with attractive foliage and flowers.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 17,
    name: "Kalanchoe",
    price: 20,
    category: "Flowering Plants",
    description:
      "A cheerful succulent that produces clusters of colorful blooms.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 18,
    name: "Christmas Cactus",
    price: 26,
    category: "Flowering Plants",
    description:
      "A festive flowering cactus with cascading segmented stems.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
  }

];

export default function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartIds = new Set(
    cartItems.map((item) => item.id)
  );

  const categories = [
    ...new Set(
      products.map((product) => product.category)
    )
  ];

  return (
    <main className="page-container">

      <header className="page-heading">

        <p className="eyebrow">
          Our Collection
        </p>

        <h1>
          Shop Houseplants
        </h1>

        <p>
          Choose from beautiful plants for every room
          and every level of experience.
        </p>

      </header>

      {categories.map((category) => (

        <section
          className="category-section"
          key={category}
        >

          <h2>
            {category}
          </h2>

          <div className="product-grid">

            {products
              .filter(
                (product) =>
                  product.category === category
              )
              .map((product) => {

                const added =
                  cartIds.has(product.id);

                return (

                  <article
                    className="product-card"
                    key={product.id}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-info">

                      <span className="category-label">
                        {product.category}
                      </span>

                      <h3>
                        {product.name}
                      </h3>

                      <p>
                        {product.description}
                      </p>

                      <div className="product-footer">

                        <strong>
                          ${product.price.toFixed(2)}
                        </strong>

                        <button
                          className="add-button"
                          disabled={added}
                          onClick={() =>
                            dispatch(
                              addItem(product)
                            )
                          }
                        >
                          {added
                            ? "Added to Cart"
                            : "Add to Cart"}
                        </button>

                      </div>

                    </div>

                  </article>

                );
              })}

          </div>

        </section>

      ))}

    </main>
  );
}
