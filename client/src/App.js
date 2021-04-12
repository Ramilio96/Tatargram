import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import TatargramContainer from "./components/Tatargram/TatargramContainer";

export const App = () => {
  return (
    <div>
      <Header />
      <TatargramContainer />
    </div>
  );
};
