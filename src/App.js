
import "./App.css";
import CallToAction from "./components/CallToAction/CallToAction";
import "./components/Features/Feature.css";
import Feature from "./components/Features/Feature.js";
import Modal from "./components/Modal/Modal";
function App() {
  return (
    <div className="container-fluid">
      <Feature />
      <CallToAction />
      <Modal />
    </div>
  );
}

export default App;
