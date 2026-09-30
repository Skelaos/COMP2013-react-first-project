import "./App.css";
import DiamondContainer from "./Components/DiamondContainer";
import data from "./data/data.ts";

function App() {
  return (
    <>
      <h1>Diamond World</h1>
      <DiamondContainer data={data} />
    </>
  );
}
export default App;
