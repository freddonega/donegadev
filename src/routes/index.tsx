import { Routes as DomRoutes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Project } from "@/pages/Project";
export const Routes = () => {
  return (
    <DomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:projectId" element={<Project />} />
    </DomRoutes>
  );
};
