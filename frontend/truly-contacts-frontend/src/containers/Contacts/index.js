import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";
import ContactsListUI from "../../layout/Contacts/List";
import isAuthenticated from "../../utils/isAuthenticated";

const ContactsContainer = () => {
  const { contactsDispatch, contactsState } = useContext(GlobalContext);

  const history = useNavigate();

  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);
  return <ContactsListUI state={contactsState} />;
};

export default ContactsContainer;
