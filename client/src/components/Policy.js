import React from 'react';

const Link = (props) => {
  const { policy } = props;
  return (
    <div>
      <div>
        {policy.insuranceType} ({policy.status})
      </div>
    </div>
  );
};

export default Link;