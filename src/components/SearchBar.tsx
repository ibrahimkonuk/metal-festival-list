import { TextInput } from "@mantine/core";
import { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <TextInput
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleChange}
      mb="md"
    />
  );
};

export default SearchBar;
