import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function handleClick(e) {
  e.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Breadcrumb = () => {
  const location = useLocation();
  const locArray = location.pathname.split('/');

  return (
    <div role='presentation' style={{ padding: 5 }} onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          underline='hover'
          color='inherit'
          component={RouterLink}
          to='/dashboard'
        >
          dashboard
        </Link>
        <Link underline='hover' color='text.primary' aria-current='page'>
          {locArray[2]}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
