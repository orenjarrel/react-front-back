import React from 'react'
import PropTypes from 'prop-types'


// const Navbar = (props) => {
const Navbar = ({ icon, title }) =>  {  // destructuring
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> 
        {title}
      </h1>
    </nav>
  );
}
  

Navbar.defaultProps = {  // sets default props if none are given
  title: 'Github Application!',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
