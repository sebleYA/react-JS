import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ tittle, onAdd, showAdd}) => {

  return (
    <header className="header">
      <h1>{tittle} </h1>
      
      <Button color={showAdd ? 'red' : 'green'} text = {showAdd ? 'close' : 'Add'}onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  tittle: 'Task Tracker'
};

Header.propType = {
  tittle: PropTypes.string.isRequired
};

// // CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// };

export default Header;
