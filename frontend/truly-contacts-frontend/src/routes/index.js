import RegisterContainer from "../containers/Register";
import LoginContainer from "../containers/Login";
import ContactsContainer from "../containers/Contacts";
import CreateContactsContainer from "../containers/CreateContacts";

const routes = [
  {
    path: "/auth/login",
    element: LoginContainer,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/",
    element: ContactsContainer,
    title: "Contacts",
    needsAuth: true,
  },
  {
    path: "/auth/register",
    element: RegisterContainer,
    title: "Register",
    needsAuth: false,
  },

  {
    path: "/contacts/create",
    element: CreateContactsContainer,
    title: "Create Contact",
    needsAuth: true,
  },
];

export default routes;
