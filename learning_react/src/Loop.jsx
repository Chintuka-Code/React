import React from 'react';
import './index.css';
let data = [
  { name: 'sabban', rollno: 14 },
  { name: 'sabban', rollno: 12 },
  { name: 'sabban', rollno: 11 },
  { name: 'sabban', rollno: 144 },
  { name: 'sabban', rollno: 141 },
  { name: 'sabban', rollno: 142 },
];


// function Loop(props)
// {
// return <><h1>{props.name}</h1></>
// }

function Loop() {
  return (
    <>
      {data.map((info) => {
        return (
          <>
            <h1>{info.name}</h1>,<p>{info.rollno}</p>
          </>
        );
      })}
    </>
  );
}

export default Loop;
