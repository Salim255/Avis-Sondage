import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/loginSlice";
const initialState = {
  login: "",
  password: "",
};

export default function Login() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { login, password } = values;
    if (!login || !password) {
      toast.error("Please fill out all fields");
      return;
    }

    dispatch(loginUser({ login, password }));
    return;
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/sondage");
      }, 2000);
    }
  }, [user]);

  return (
    <>
      <div className="login">
        <form onSubmit={onSubmit} className="login__container">
          <h3>Login</h3>
          <div>
            <label htmlFor="login">Email</label>
            <input
              type="text"
              name="login"
              value={values.login}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block">
            {isLoading ? "loading..." : "submit"}
          </button>
        </form>
        ;
      </div>
    </>
  );
}
