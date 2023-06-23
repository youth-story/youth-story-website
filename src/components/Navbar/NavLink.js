import React from 'react';
import {Link} from 'react-router-dom';

export default function NavLink({ to, active, title, isScrolled }) {
    return (
      <Link to={to} style={{ marginRight: '2rem', textDecoration: 'none', color: isScrolled ? 'white' : 'dodgerblue' }}>
        {title}
      </Link>
    );
}