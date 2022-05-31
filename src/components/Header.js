import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ tittle }) => {
    const onClick = () =>{
        console.log('Click');
    }
  return (
    <header className="header">
      <h1>{tittle} </h1>
      
      <Button color='green' text = 'Add' onClick={onClick} />
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
