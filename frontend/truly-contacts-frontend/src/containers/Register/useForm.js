import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setfieldErrors] = useState({});

  const history = useNavigate();

  const {
    authdispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        setfieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      history("/auth/login");
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  console.log(form);

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;

  const onSubmit = () => {
    setfieldErrors({});
    register(form)(authdispatch);
  };
  return { form, onChange, loading, fieldErrors, registerFormValid, onSubmit };
};
