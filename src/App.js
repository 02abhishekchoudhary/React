import { createContext, useState } from "react";
import "./App.css";
import ClassComp from "./Components/ClassComp";
import ComponentA from "./Components/ComponentA";
import FunctionComp from "./Components/FunctionComp";
import PropsClassComp from "./Components/PropsClassComp";
import PropsFunctionComp from "./Components/PropsFunctionComp";
import FormComp from "./Components/FormComp";
import ClassLC from "./Components/ClassLC";
import FunctionalLC from "./Components/FunctionalLC";

export const messageContext = createContext(null);
// messageContext.displayName="Message";

function App() {
  const [mount, setMount] = useState(true);
  return (
    <div className="App">
      {/* <ClassComp/> */}
      {/* <FunctionComp/> */}
      {/* <PropsClassComp name="Abhishek" num={24} /> */}
      {/* <PropsFunctionComp
        name="Abhishek"
        num={24}
        user={{ userName: "Abhishek", city: "Delhi" }}
      >
        {{ color: "cyan", backgroundColor: "pink" }}
      </PropsFunctionComp> */}
      {/* <PropsFunctionComp /> */}
      {/* <FunctionComp/> */}

      {/* <messageContext.Provider value={"Message from App.js"}>
        <ComponentA />
      </messageContext.Provider> */}

      {/* <FormComp/> */}
      {/* {mount && <ClassLC />}
      <div>
        <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      </div> */}

      {/* <FunctionalLC/> */}
      {mount && <FunctionalLC />}
      <div>
        <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      </div>
    </div>
  );
}

export default App;
