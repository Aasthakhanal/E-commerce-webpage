const SortMenu = ({ value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 cursor-pointer"
  >
    <option value="">Sort By</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
    <option value="rating-desc">Rating: High to Low</option>
    <option value="rating-asc">Rating: Low to High</option>
  </select>
);

export default SortMenu;
