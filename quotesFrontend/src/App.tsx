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

  const [author, setAuthor] = useState<string>();
  const [quote, setQuote] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const getQuote = async () => {
    try {
      setLoading(false);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
      const res = response.data.message.quote;
      const data = res.split("-");
      setQuote(data[0].trim());
      setAuthor(data[1].trim());
    } catch (err) {
      console.log(err);
    }
    setLoading(true);
  };

  console.log(`author is ${author}`);
  console.log(`quote is ${quote}`);

  return (
    <>
      <div className="page-container">
        <div className="logo">
          <div className="card" style={{ width: "18rem",borderRadius:"20px",backgroundColor:"rgba(255, 255, 255, 0.5)" }}>
            <p className="typo-style" onClick={getQuote}>
              Because Hitory Is Written In Blood
            </p>
            <p
              style={{ display: loading ? "block" : "none",textAlign:"center" }}
              className="quote"
            >
              {quote}
            </p>
            <p
              style={{ display: loading ? "block" : "none",textAlign:"center" }}
              className="author"
            >
              {author}
            </p>
          </div>
        </div>
        <MainBack />
      </div>
    </>
  );
}

export default App;
