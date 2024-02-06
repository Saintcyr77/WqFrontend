import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainBack from "./components/MainBack";
import Container from "@mui/material/Container";
import gun from "../src/assets/gun.jpg";
import { Typography } from "@mui/material";

import axios from "axios";
function App() {
  const [count, setCount] = useState<number>(0);

  const [quote, setQuote] = useState<string>();
  // const apiUrl: any = process.env.VITE_APP_API_URL;

  const getQuote = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
      setQuote(response.data);
    } catch (err) {
      console.log(err);
    }
  };
console.log(quote);

  return (
    <>
      <div className="page-container">
        <div className="logo">
          {/* <img src={gun} alt='Click' className='logo-image'></img> */}
          <p className="typo-style" onClick={getQuote}>Because Hitory Is Written In Blood</p>
        </div>
        <MainBack />
      </div>
    </>
  );
}

export default App;
