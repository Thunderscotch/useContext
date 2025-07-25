"use client"
import React, { useContext } from "react";
import { Form1 } from "./components/Form1";
import { ShowFrom } from "./components/showForm";
import { RouterContext, RouterProvider, pageContext } from "./context/Router";
import { Provider } from "./context/UserContext";
import { Form2 } from "./components/Form2";

export default function App() {

  const {page} = useContext(RouterContext);
  console.log("App: ",page);

  return (
    <div className="justify-center align-center mt-10">      
       {pageContext.page1 === page && <Form1/>}
       {pageContext.page2 === page && <Form2/>}
       {pageContext.summary === page && <ShowFrom/>}
    </div>
  );
}
