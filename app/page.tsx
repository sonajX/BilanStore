// app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedProduct from './components/FeaturedProduct';
import CategoryList from './components/CategoryList';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProduct />
      <CategoryList />
      <Footer />
    </div>
  );
}
