import React from "react";
import ProductItem from "../../components/ProductItem";

const productsData = [
  {
    title: "Crimson Luxe Gown – Elegant full-length dress",
    price: 100.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-1.webp",
  },
  {
    title: "Emerald Draped Dress",
    price: 120.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-2.webp",
  },
  {
    title: "Sapphire Silk Blouse",
    price: 80.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-3.webp",
  },
  {
    title: "Golden Evening Gown",
    price: 150.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-4.webp",
  },
  {
    title: "Ruby Red Cocktail Dress",
    price: 90.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-5.webp",
  },

  {
    title: "Emerald Draped Dress",
    price: 120.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-2.webp",
  },

  {
    title: "Sapphire Silk Blouse",
    price: 80.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-3.webp",
  },
];

const Products = () => {
  return (
    <section className="mt-6 px-4 md:px-8" aria-label="products">
      <div className="max-w-7xl mx-auto">
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {productsData.map((product, index) => (
            <ProductItem
              key={index}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
