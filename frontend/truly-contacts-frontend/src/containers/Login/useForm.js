import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { Navigate, useNavigate } from "react-router-dom";

export default () => {
  const [form, setForm] = useState({});

  const history = useNavigate();

  const {
    authdispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.username?.length || !form.password?.length;

  const onSubmit = () => {
    login(form)(authdispatch);
  };

  useEffect(() => {
    if (data && localStorage.token) {
      if (data.user) {
        history("/");
      }
    }
  }, [data]);
  return { form, onChange, loading, error, loginFormValid, onSubmit };
};
