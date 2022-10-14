import PropTypes from 'prop-types';

import { useState  } from 'react';
import { Bar,SearchForm ,Button,Input} from './Searchbar.styled';


export const Searchbar = (props) => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.currentTarget.value );
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(query);
    };


    return (
      <Bar>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit">Искать</Button>
      </SearchForm>
      </Bar>
    );

}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
  }