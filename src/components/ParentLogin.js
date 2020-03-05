import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth'


const ParentLogin = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    axiosWithAuth()
      .post("https://kids-fly-be.herokuapp.com/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("server response", res.data);
        props.history.push("/admin");
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div className="LogIn">
      <h1>Welcome to KidsFly!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <input type="email" name="email" ref={register} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" ref={register} />
        </label>
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default ParentLogin;