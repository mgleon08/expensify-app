// Export a stateless functional component
// description, amount, createdAt
import React from 'react';

export default ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);
