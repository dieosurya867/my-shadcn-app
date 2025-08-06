import { useState } from "react";
import { Button } from "./components/ui/button";
import Article from "./components/Article";
import Home from "./pages/Home";
import Props from "./components/Props";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlobalContext } from "./context/index";

//app sebagai parent
function App() {
  const user = {
    username: "Dieo",
  };

  const value = false;

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {value ? "benar" : "Salah"}
      <div className="App">
        // menggunakan context untuk mengambil data sementara
        <GlobalContext.Provider value={user}>
          <Home />
        </GlobalContext.Provider>
      </div>
      {/* <Article name="dieo" titles={["VueJs", "NextJs", "NodeJS"]} /> */}
      {/* <Props name="Dieo" /> */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Button variant="default" size="lg">
          Tombol Shadcn (JS)
        </Button>
      </div>
    </>
  );
}

export default App;
