/* Core */
import React from 'react';

/* Presentational */
import Search from 'pages/components/Header/components/Search';

import * as Octicons from 'react-icons/lib/go';

import './styles.css';

const Header = () => (
  <div className="headerContainer">
    <Octicons.GoMarkGithub
      size={60}
      color="#24292e"
    />
    <Search />
  </div>
);

export default Header;
