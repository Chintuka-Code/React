import React, { useState } from 'react';
import '../index.css';
const States = () => {
  // Single Value
  const [name, setname] = useState('sabban');

  //   How to pass object in states
  const [info, setinfo] = useState({ fname: 'sabban', lname: 'Mohmad' });

  const setnam = () => {
    const name = 'rahul';

    setname(name);
    setinfo({ fname: name, lname: 'mehra' });
  };

  return (
    <>
      <h1 className="heading" onClick={setnam}>
        HEllo {`${info.fname}${info.lname}`}
      </h1>

      <h1>{name}</h1>
    </>
  );
};

export default States;
