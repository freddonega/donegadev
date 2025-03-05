import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Layout } from "@/pages/_Layout";

export const Home = () => {
  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};
