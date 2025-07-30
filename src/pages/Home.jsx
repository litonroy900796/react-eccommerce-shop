import React from "react";
import ProductList from "../components/ProductList";
import CartSection from "../components/CartSection";

function Home() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section (2/3 width on large screens) */}
        <ProductList />
        {/* Cart Section (1/3 width on large screens) */}
        <CartSection />
      </div>
    </main>
  );
}

export default Home;
