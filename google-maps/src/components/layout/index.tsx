import React, { ReactNode, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
interface HomeProps {
  children: ReactNode;
}

const AppLayout: React.FC<HomeProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement your search logic here, e.g., update the map based on the query
  };
  return (
    <div className="flex">
      <Sidebar onSearch={handleSearch} />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
