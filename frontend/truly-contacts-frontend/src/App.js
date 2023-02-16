import React, { useState, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useRoutes,
} from "react-router-dom";
import routes from "./routes";
import ContactsContainer from "./containers/Contacts";
import { GlobalProvider } from "./context/Provider";
import isAuthenticated from "./utils/isAuthenticated";

const RenderRoute = ({ route }) => {
  document.title = route.title || "TrulyContacts";
  if (route.needsAuth && !isAuthenticated()) {
    return <Navigate to="/auth/login" />;
  } else {
    return <route.element />;
  }
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={route.path}
              path={route.path}
              // exact
              element={<RenderRoute route={route} />}
            ></Route>
          ))}
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
