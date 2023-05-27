import "./App.css";
import ClassComp from "./Components/ClassComp";
import FunctionComp from "./Components/FunctionComp";
import PropsClassComp from "./Components/PropsClassComp";
import PropsFunctionComp from "./Components/PropsFunctionComp";

function App() {
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
      <PropsFunctionComp />
      <FunctionComp/>
      
    </div>
  );
}

export default App;
