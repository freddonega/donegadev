import { Routes as DomRoutes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Project } from "@/pages/Project";
import { TrackPageView } from "./TrackPageView";
export const Routes = () => {
  return (
    <DomRoutes>
      <TrackPageView />
      <Route path="/" element={<Home />} />
      <Route path="/project/:projectId" element={<Project />} />
    </DomRoutes>
  );
};
