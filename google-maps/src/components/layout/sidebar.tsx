import React, { ReactNode, useState } from "react";

interface HomeProps {
  onSearch: any;
}

const Sidebar: React.FC<HomeProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Check if searchQuery is not empty
    if (searchQuery.trim() !== "") {
      // Call the onSearch function and pass the searchQuery
      onSearch(searchQuery);
    }
  };

  return (
    <aside className="bg-gray-800 p-4 w-64">
      <h2 className="text-xl font-semibold mb-4 text-white">Search Places</h2>
      <div className="mb-4">
        <input
          type="search"
          placeholder="Enter a place..."
          className="w-full px-3 py-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
      {/* ... Other content ... */}
    </aside>
  );
};

export default Sidebar;
