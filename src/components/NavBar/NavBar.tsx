import React from 'react';
import Parametericon from '../Parametericon/Parametericon';
import SearchInput from '../UI/SearchInput/SearchInput';

import './NavBar.css';

function NavBar() {

  return (
    <div className='navBar'>
        <SearchInput/>
        <Parametericon/>
    </div>
  )
}

export default NavBar