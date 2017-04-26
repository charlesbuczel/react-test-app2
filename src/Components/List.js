import React from 'react';

function List(props) {
  return (
    <ul>
    {
      props.items.map((item) => {
        return <li key={item}>{item}</li>
      })
    }
    </ul>
  );
}

export default List;
