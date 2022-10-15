import PropTypes from 'prop-types';
import { LoadMore,Box } from './LoadMore.styled';

export const LoadMoreBtn = ({ onClick}) => {
  
    return (<Box> <LoadMore type='button'onClick={onClick}>Load more...</LoadMore></Box>
    );
  };

  LoadMore.propTypes = {
    onClick: PropTypes.func.isRequired
    }