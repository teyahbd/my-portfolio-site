import "./App.css";
import ScrollContainer from "./organisms/ScrollContainer/ScrollContainer";
import StaticHeader from "./organisms/StaticInfo/StaticInfo";

function App() {
  return (
    <>
      <div id="main-page">
        <StaticHeader />
        <ScrollContainer />
      </div>
    </>
  );
}

export default App;
