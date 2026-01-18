import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blueprints from "./pages/Blueprints";
import Purchase from "./pages/Purchase";
import Buy from "./pages/Buy";
import FreeTrial from "./pages/FreeTrial";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import AiAssistant from "./pages/AiAssistant";
import Help from "./pages/Help";
import Setting from "./pages/Setting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/blueprints" element={<Blueprints />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/freetrial" element={<FreeTrial />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />

        {/* Extra Pages */}
        <Route path="/ai-assistant" element={<AiAssistant />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Setting />} />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div style={{ color: "white", padding: "40px" }}>
              <h2>404 - Page Not Found</h2>
              <p>Ye route exist nahi karta.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
);
}
