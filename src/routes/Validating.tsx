import React from 'react';
import { useNavigate } from 'react-router-dom';

const ID = 'TEST_ID';

function Validating() {
  const nav = useNavigate();
  setTimeout(() => {
    nav(`dashboard/${ID}`);
  }, 5000);

  return <div>Validating...</div>;
}
export default Validating;
