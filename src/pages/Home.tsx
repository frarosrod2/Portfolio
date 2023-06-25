import { Introduction } from "../components/Introduction";
import { Navbar } from "../components/Navbar";
import { projects } from "../utils/projects";
import { About } from "./About";
import { Projects } from "./Projects";
import { TimelinePage } from "./Timeline";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <About></About>
      <TimelinePage></TimelinePage>
      <Projects projects={projects}></Projects>
    </>
  );
};
