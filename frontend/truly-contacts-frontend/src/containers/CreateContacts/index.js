import React, { useState } from "react";
import Header from "../../components/Header";
import CreateContact from "../../layout/Contacts/Create";

const CreateContactsContainer = () => {
  const [form, setForm] = useState({});
  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };
  return <CreateContact onChange={onChange} form={form} />;
};

export default CreateContactsContainer;
