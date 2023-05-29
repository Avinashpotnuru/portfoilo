// const inter = Inter({ subsets: ["latin"] });

import About from "../components/About";
import MyProjects from "../components/MyProjects";

export default function Home() {
  return (
    <h1 className="">
      <About />
      <MyProjects />
    </h1>
  );
}
