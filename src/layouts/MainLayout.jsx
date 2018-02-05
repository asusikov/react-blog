import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavBar from 'layouts/elements/NavBar';

const MainLayout = ({ className, children }) => (
  <div className={className}>
    <NavBar/>
    <div className="main container">
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

const StyledMainLayout = styled(MainLayout)`
  .main.container {
    margin-top: 15px;
  }
`;

export default StyledMainLayout;
