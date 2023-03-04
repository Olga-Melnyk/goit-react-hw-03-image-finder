import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onSearch }) => {
  return (
    <>
      <ButtonLoadMore type="button" onClick={() => onSearch()}>
        Load more
      </ButtonLoadMore>
    </>
  );
};

Button.propTypes = {
  onSearch: PropTypes.func,
};
