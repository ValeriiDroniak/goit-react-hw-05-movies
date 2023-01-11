import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
    onSubmit(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <GoSearch size="100%" fill={theme.colors.accent} />
      </SearchButton>

      <Input
        onChange={e => setQuery(e.target.value.trim())}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </Form>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
