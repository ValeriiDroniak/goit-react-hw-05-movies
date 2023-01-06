// import { Box } from 'components/Box/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import theme from 'utils/theme';
import { Input, SearchButton, Form } from './Searchbar.styled';

export const Searchbar = ({ value, onSubmit }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (value) {
      setQuery(value);
    }
  }, [value]);

  const handleSubmit = evt => {
    evt.preventDefault();
    // onSubmit(evt.currentTarget.lastChild.value.trim());
    onSubmit(query);
    // evt.target.reset();
  };

  return (
    // <Box bg="secondary" p="16px" textAlign="center">
    <Form onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <GoSearch size="80%" fill={theme.colors.primary} />
      </SearchButton>

      <Input
        onChange={e => setQuery(e.target.value)}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </Form>
    // </Box>
  );
};
