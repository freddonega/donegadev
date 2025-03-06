import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "@/routes";

import { TrackPageView } from "@/routes/TrackPageView";
import ReactGA from "react-ga4";
import "./index.css";

const analyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

// Inicializa o Google Analytics se o ID estiver definido
if (analyticsId) {
  ReactGA.initialize(analyticsId);
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TrackPageView />
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
