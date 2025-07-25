import React, { useContext } from "react";
import { Form1 } from "./components/Form1";
import { ShowFrom } from "./components/showForm";
import { RouterContext, RouterProvider, pageContext } from "./context/Router";
import { Provider } from "./context/UserContext";
import { Form2 } from "./components/Form2";
import App from "./app";

export default function Home() {

  return (
    <React.StrictMode>
    <RouterProvider>
    <Provider>
      <App/>
    </Provider>
    </RouterProvider>
  </React.StrictMode>
  );
}
