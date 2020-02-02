import React from 'react';
import Helmet from 'react-helmet';

const Title = ({ titleName }) => (
  <Helmet>
    <title>{`Instagram | ${titleName}`}</title>
  </Helmet>
);

export default Title;
