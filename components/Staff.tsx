'use client'

import React, { useState } from 'react';
import StaffCard from './StaffCard';
import Dropdown from './Dropdown';
import { staff, titles } from '@/data';
import SearchComponent, { StaffMember } from './SearchComponent';



const Staff: React.FC = () => {
    const [filteredStaff, setFilteredStaff] = useState<StaffMember[]>(staff);
    
    const handleSearchResults = (results: StaffMember[]) => {
        setFilteredStaff(results);
    };

  return (
    <section className="padding  ">
      <section className="relative z-50 flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
        <Dropdown
          options={titles}
          onSearchResults={handleSearchResults}
        />
        <SearchComponent onSearchResults={handleSearchResults} />
      </section>


      <section className="pt-16 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center">
        {filteredStaff.length > 0 ? (
          filteredStaff.map((item, idx) => (
            <StaffCard key={idx} item={item} />
          ))
        ) : (
          <p className="text-center text-gray-500">No staff members found.</p>
        )}
      </section>
    </section>
  );
};

export default Staff;
