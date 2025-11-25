const CategoryFilter = ({ categories, selected, onChange }) => (
  <select
    value={selected}
    onChange={(e) => onChange(e.target.value)}
    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 cursor-pointer"
  >
    <option value="">All Categories</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
);

export default CategoryFilter;
