import React, { Children, useState } from "react";
import ItemDetails from "./ItemDetails";
import usersData from "./users.json";
import "./components.css";
import ComponentA from "./ComponentA";

// console.log(usersData);
// We can diirectly pass destructured props in paramters instead of using props
// e.g: const PropsFunctionComp = ({ name, num, user:{city, country} })

const PropsFunctionComp = (props) => {
  // console.log(props);
  // const {
  //   // name,
  //   // num,
  //   user: { userName, city },
  // } = props;

  const [number, setNumber] = useState(1);
  console.log(number);

  return (
    <div>
      {/* <h1>Props In Function Component</h1> */}
      {/* <h2 style={ props.children }>{userName} lives in {city}</h2> */}
      {/* <div> */}
      {/* <h3>Name = {props.name}</h3>
        <h3>Age = {props.num}</h3> */}
      {/* <h3>Name : {name}</h3>
        <h3>Age : {num}</h3>
        <h3>
          Info : {userName} is the capital of {city}{" "}
        </h3>
        <h4>{props.children}</h4>
        <div>
          {number}
          <button onClick={() => setNumber(number + 1)}>Set Age</button>
        </div>
      // </div> */}

      {/* {usersData.map((user, index) => (
        // <div key={index} className="user-info">
        //   <div>{user.name}</div>
        //   <div>{user.email}</div>
        //   <div>{user.phone}</div>
        // </div>
        <ItemDetails key={index} name={user.name} email={ user.email} phone={user.phone} />
      ))} */}

      {/* {usersData.map((user, index) => {
        return (
          <div key={index} className="user-info">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        );
      })} */}
      {/* <ItemDetails/> */}
      <ComponentA num={number} setNumber={setNumber} />
      {/* <button onClick={() => setNumber(number + 1)}>Inc</button> */}
    </div>
  );
};

export default PropsFunctionComp;

/* How to use props */
// 1.To use props. everytime to access value
// 2.To destructure the data from the props
// 3. To destructure directly in parametrs
