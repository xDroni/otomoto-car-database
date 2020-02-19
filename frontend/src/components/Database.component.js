import React from 'react';

const Database = (props) => {
  const carsListLength = props.size;

  return (
    <p>{carsListLength}</p>
  )
};

export default Database;