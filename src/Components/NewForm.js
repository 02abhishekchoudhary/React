import React from "react";
import { useForm } from "../utils/CustomHooks";

const NewForm = () => {
  const { values, onInputChange, onSubmit } = useForm();
  return (
    <div>
      <h1>New Form</h1>
      <form>
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder={"email"}
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder={"password"}
          onChange={(event) => onInputChange(event)}
        />
      </form>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default NewForm;
