import React from 'react';

//stateless functional component
const Purse = props => {
  return (
    <li>
        {props.name}: {props.denomination}
    </li>
  );
}

export default Purse; 