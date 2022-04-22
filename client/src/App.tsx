import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { InitLayout } from "./components/page/InitLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts } from "./components/molecule/Posts";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<InitLayout />} />
            <Route path="/detail" element={<Posts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
