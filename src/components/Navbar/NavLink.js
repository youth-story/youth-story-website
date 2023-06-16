import React from 'react';
import {Link} from 'react-router-dom';

export default function NavLink({ to, active, title }) {
    return (
      <Link to={to} style={{ marginRight: '1rem', textDecoration: 'none', color: active ? 'red' : 'inherit' }}>
        {title}
      </Link>
    );
}