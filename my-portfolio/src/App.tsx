
import "./App.css"
import {Home }from "./components/Home";
import BasicExample from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/project.tsx";
import "./index.css"
function App() {
 
  return (
    <div>
     <BasicExample />
     <Home />
     <Skills />
     <Project />
    </div>
  );
}
export default App;
