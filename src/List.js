import React from 'react';

const List = (props) => {
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <img src={`${props.image}`} alt={props.alt} />
    </div>
  );
};

export default List;
