import React from 'react'

//stateless functional component
const Change = props => {
  return (
    <li>
        {props.name}: {props.numCoins}
    </li>
  );
}

export default Change; 