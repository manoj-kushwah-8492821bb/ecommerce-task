import { useState } from 'react'
import Header from '../../layout/Header'
import type { Category } from '../../types';
import { CategoryFilter } from '../../component/CategoryFilter';
import { SearchBar } from '../../component/SearchBar';
import { ProductGrid } from '../../component/ProductGrid';
import { Footer } from '../../layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/productApi';
import { ShoppingCart } from '../../component/ShoppingCart';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  // Fetch products using React Query
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAdmin={false} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="w-full sm:w-96">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </main>

      {/* Shopping Cart */}
      <ShoppingCart />
      <Footer />
    </div>
  )
}

export default Home
