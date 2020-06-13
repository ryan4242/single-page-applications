import React from  'react';

const Success = ({order}) => {
  return (
    <div>
      <h3>{order.name}! Your {order.size} tacos are on the way!</h3>
    </div>
  )
}

export default Success;