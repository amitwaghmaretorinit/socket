import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import MessagePanel from "./components/MessagePanel";

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <div className={'sidebar'}>
          <SideBar />
        </div>
        <div className={'message_panel'}>
          <MessagePanel />
        </div>
      </div>
    </div>
  );
}

export default App;
