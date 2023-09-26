import "./App.css";
import ScrollContainer from "./organisms/ScrollContainer/ScrollContainer";
import StaticInfo from "./organisms/StaticInfo/StaticInfo";

function App() {
  return (
    <>
      <div id="main-page">
        <StaticInfo />
        <ScrollContainer />
      </div>
    </>
  );
}

export default App;
