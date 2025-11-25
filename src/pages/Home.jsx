import { useState, useEffect } from "react";
import { SlidersHorizontal, Loader2 } from "lucide-react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortMenu from "../components/SortMenu";
import ShimmerCard from "../components/ShimmerCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [categories, setCategories] = useState([]);

  const LIMIT = 20;

  const fetchProducts = async (skipCount) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skipCount}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return { products: [], total: 0 };
    }
  };
  useEffect(() => {
    const loadInitialProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(0);
      setProducts(data.products);
      setHasMore(data.products.length < data.total);
      setLoading(false);

      const uniqueCategories = [
        ...new Set(data.products.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    };
    loadInitialProducts();
  }, []);

  const loadMoreProducts = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const newSkip = skip + LIMIT;
    const data = await fetchProducts(newSkip);
    setProducts((prev) => [...prev, ...data.products]);
    setSkip(newSkip);
    setHasMore(products.length + data.products.length < data.total);
    setLoadingMore(false);


    const newCategories = [
      ...new Set([...categories, ...data.products.map((p) => p.category)]),
    ];
    setCategories(newCategories);
  };

  // Infinite scroll observer
  const lastProductRef = useInfiniteScroll(loadMoreProducts);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Search filter
    if (searchTerm) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-asc") {
      result.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [products, searchTerm, category, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Filters Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-[72px] z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <div className="flex gap-2 w-full md:w-auto">
              <CategoryFilter
                categories={categories}
                selected={category}
                onChange={setCategory}
              />
              <SortMenu value={sortBy} onChange={setSortBy} />
            </div>
          </div>
        </div>
      </div>

    
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <SlidersHorizontal className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No products found
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  ref={
                    index === filteredProducts.length - 1
                      ? lastProductRef
                      : null
                  }
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            {loadingMore && (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              </div>
            )}
            {!hasMore && filteredProducts.length > 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                You've reached the end!
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
