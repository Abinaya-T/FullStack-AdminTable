import React from 'react';

const Policy = (props) => {
  const { policy } = props;
  return (
    <div>
      <div>
        {policy.insuranceType} ({policy.status})
      </div>
    </div>
  );
};

export default Policy;