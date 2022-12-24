import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/index";
import { useEffect, useState } from "react";
import axiosInstance from "./helper/axios";
import { profileStore } from "./CreateStore";

function App() {
  const { updateProfile } = profileStore();
  useEffect(() => {
    axiosInstance
      .get("/v1/users/profile", {
        // prettier-ignore
        headers: {
          "Authorization": "bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        updateProfile(response.data.data);
      })
      .catch(() => {
        // localStorage.removeItem("access_token", "");
      });
  }, []);

  return (
    <Routes>
      {routes.map((data, index) => (
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={data.path}
          element={data.component}
          key={index}
        />
      ))}
    </Routes>
  );
}

export default App;
