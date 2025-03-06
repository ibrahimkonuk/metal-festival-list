import { TextInput } from "@mantine/core";
import React from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
  currentValue: string;
}

const SearchBar = ({ placeholder, onSearch, currentValue }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <TextInput
      placeholder={placeholder}
      value={currentValue}
      onChange={handleChange}
      mb="md"
    />
  );
};

export default SearchBar;
