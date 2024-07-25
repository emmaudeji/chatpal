import React, { useState } from 'react';
import { DownIcon } from '@/assets';
import { StaffMember } from './SearchComponent';
import { staff } from '@/data';

interface DropdownProps {
  options: string[];
  onSearchResults: (results: StaffMember[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSearchResults }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');

  const filterStaffByTitle = (title: string) => {
    const filtered = staff.filter((member:StaffMember) => member.title === title);
    onSearchResults(filtered);
  };

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setView(option)
    setSelectedOption(option);
    setIsOpen(false);
    filterStaffByTitle(option);
  };

  return (
    <div className="relative">
      <div
        className="bg-gray-200 rounded-full p-3 flex justify-between items-center w-52 cursor-pointer"
        onClick={handleToggle}
      >
        <p>{view || 'Select title'}</p>
        <DownIcon />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg w-full">
            <div
              key={'Select staff role'}
              className="p-3 bg-gray-100 cursor-pointer"
              onClick={() =>{
                onSearchResults(staff)
                setView('Select staff role') 
                setIsOpen(false);
               }}
            >
              Select staff role
            </div>
          {options.map((option) => (
            <div
              key={option}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
