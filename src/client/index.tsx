import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import RegisterScreen from "./RegisterPage";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <Router>
      <Routes>
        <Route path="/" element={<RegisterScreen />} />
        <Route path="/chat" element={<App />} />
      </Routes>
    </Router>
  );
}
