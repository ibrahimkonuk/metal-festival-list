import { TextInput } from "@mantine/core";
import React, { ReactElement } from "react";

type SearchBarProps = {
  placeholder: string;
  onSearch: (_searchTerm: string) => void;
  currentValue: string;
};

const SearchBar = ({
  placeholder,
  onSearch,
  currentValue,
}: SearchBarProps): ReactElement => {
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
