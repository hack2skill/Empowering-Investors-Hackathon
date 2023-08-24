import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./assets/css/styles.css";
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
