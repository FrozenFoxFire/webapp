import React from 'react';

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function Stocks({ debug, skip }: Props) {
  if (debug) {
    console.log('Security: ', { debug, skip })
  }

  return <div>Stocks</div>;
}
export default Stocks;
