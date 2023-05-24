import './App.css';


// const name = "Abhishek";
// const age = 24;
// const numArr = [1, 2, 3, 4, 5];
const user = {
  name: "Abhishek",
  age:25
}
function App() {
  return (
    <div className="App">
      <p>
        {/* My name is {name} and age is {age} */}
        {/* <div>{numArr}</div> */}
        My name is {user.name} and age is {user.age}
      </p>
    </div>
  );
}

export default App;
