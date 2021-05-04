import React from "react";

import "./App.css";

export default function App() {
  return (
    <div id="footer">
      Created by Alyssa Reyes {""}
      <a
        href="https://github.com/Lyching0310/my-react-weather-app-new"
        target="_blank"
        rel="noreferrer"
        id="gitLink"
      >
        Open-source code
      </a>
      {""} and {""}
      <a
        href="https://reactweather-app-alyssareyes.netlify.app/"
        target="_blank"
        rel="noreferrer"
        id="Netlify"
      >
        Hosted on Netlify
      </a>
    </div>
  );
}
