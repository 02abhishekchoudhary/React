// import React, { useState } from "react";

// const FormComp = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   return (
//     <div>
//       <h3>Form in React</h3>
//       <div>
//         <h4>FirstName - {firstName}</h4>
//         <h4>LastName - {lastName}</h4>
//       </div>
//       <form>
//         <input
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(event) => setFirstName(event.target.value)}
//         /><br />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(event) => setLastName(event.target.value)}
//         />
//       </form>
//     </div>
//   );
// };

// export default FormComp;

import React, { useState } from "react";

const FormComp = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    qualification: "",
  });

  // const onFirstNameChange = (event) => {
  //   console.dir(event.target.name);
  //   setUserInfo({...userInfo, firstName: event.target.value })
  // }

  // const onLastNameChange = (event) => {
  //   console.dir(event.target.name);
  //   setUserInfo({...userInfo, lastName: event.target.value })
  // }

  console.log(userInfo);
  const onInputChange = (event) => {
    // console.dir(event.target.name);
    // if (event.target.options) {
    //   setUserInfo({ ...userInfo, qualification: event.target.value });
    // } else {
    //   setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    // }
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  // const onDropDownChange = (event) => {
  //   console.dir(event.target);
  // };

  // const obj ={
  // "user name": "ABC",
  //   user: "XYZ",
  //   name: "user"
  // }
  // console.log(obj[obj.name]); output: XYZ

  return (
    <div>
      <h3>Form in React</h3>
      <div>
        <h4>FirstName - {userInfo.firstName}</h4>
        <h4>LastName - {userInfo.lastName}</h4>
        <h4>Email - {userInfo.email}</h4>
        <h4>Password - {userInfo.password}</h4>
      </div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={userInfo.firstName}
          name="firstName"
          onChange={(event) => onInputChange(event)}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={userInfo.lastName}
          name="lastName"
          onChange={(event) => onInputChange(event)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={userInfo.email}
          name="email"
          onChange={(event) => onInputChange(event)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={userInfo.password}
          name="password"
          onChange={(event) => onInputChange(event)}
        />
        <br />

        <select onChange={(event) => onInputChange(event)} name="qualification">
          <option value="none">None</option>
          <option value="B.tech">B.tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>
      </form>
    </div>
  );
};

export default FormComp;
