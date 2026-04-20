import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
      <CartSidebar />
    </CartProvider>
  );
}
