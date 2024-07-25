import React, { useState, useEffect } from 'react';
import { staff, staff as staffData } from '@/data';  

interface SearchProps {
  onSearchResults: (results: StaffMember[]) => void;
}

export interface StaffMember {
  name: string;
  title: string;
  img: string;
}

const SearchComponent: React.FC<SearchProps> = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const filterStaff = () => {
      setLoading(true);
      try {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const results = staffData.filter(
          (member) =>
            member.name.toLowerCase().includes(lowerCaseSearchTerm) 
        );
        onSearchResults(results);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while searching');
        setLoading(false);
      }
    };

    if (searchTerm.length > 0) {
      filterStaff();
    } else {
      onSearchResults(staff);
    }
  }, [searchTerm]);

  return (
    <div className="bg-gray-200 rounded-full p-3 flex justify-between items-center max-sm:w-full w-96">
      <input
        type="search"
        placeholder="Search staff name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent border-none outline-none w-full"
      />
      {loading && <span className="text-gray-500">Loading...</span>}
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default SearchComponent;
