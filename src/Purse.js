import React from 'react';

//stateless functional component
const Purse = ({name, denomination, onDelete}) => {
  return (
    <li>
        {name}: {denomination}
        <strong><span title="Delete coin from purse" onClick={onDelete}> X </span></strong>
    </li>
  );
}

export default Purse; 