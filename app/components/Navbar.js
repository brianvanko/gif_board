import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {

  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            GIF Board
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse pull-right'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/add'>Add</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;