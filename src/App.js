import axios from "axios";
import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [hidden, setHidden] = useState(false);

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div
        onClick={() => getQuote()}
        className="p-2 bg-slate-200 hover:shadow-lg rounded-lg cursor-pointer"
      >
        <button>Get Random Quote</button>
      </div>
      {quote && (
        <div
          className={`mt-4 px-10 py-4 bg-gray-200 rounded-lg shadow-xl ${
            hidden ? `hidden` : "block"
          }`}
        >
          {quote}
        </div>
      )}
      <button
        onClick={() => setQuote("")}
        className="bg-red-200 p-2 rounded-lg mt-10"
      >
        Clear
      </button>
      <button
        onClick={() => setHidden(!hidden)}
        className="bg-red-200 p-2 rounded-lg mt-10"
      >
        {hidden ? "Show" : "Hidden"}
      </button>
    </div>
  );
}

export default App;
