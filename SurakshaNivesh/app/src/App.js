import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard3 from "./pages/Dashboard3";
import Dashboard4 from "./pages/Dashboard4";
import Dashboard5 from "./pages/Dashboard5";
import Dashboard6 from "./pages/Dashboard6";
import Dashboard7 from "./pages/Dashboard7";
import Dashboard8 from "./pages/Dashboard8";
import Dashboard9 from "./pages/Dashboard9";
import Dashboard10 from "./pages/Dashboard10";
import Dashboard11 from "./pages/Dashboard11";
import Dashboard12 from "./pages/Dashboard12";
import Dashboard13 from "./pages/Dashboard13";
import Dashboard14 from "./pages/Dashboard14";
import Dashboard15 from "./pages/Dashboard15";
import Dashboard16 from "./pages/Dashboard16";
import Frame from "./pages/Frame";
import Dashboard17 from "./pages/Dashboard17";
import Dashboard18 from "./pages/Dashboard18";
import Dashboard19 from "./pages/Dashboard19";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard7":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard11":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard17":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard18":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard8":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard9":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard10":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard19":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard3":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard4":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard15":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard13":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard14":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1000002074":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard12":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard5":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard7" element={<Dashboard1 />} />
      <Route path="/dashboard11" element={<Dashboard2 />} />
      <Route path="/dashboard17" element={<Dashboard3 />} />
      <Route path="/dashboard18" element={<Dashboard4 />} />
      <Route path="/dashboard" element={<Dashboard5 />} />
      <Route path="/dashboard1" element={<Dashboard6 />} />
      <Route path="/dashboard2" element={<Dashboard7 />} />
      <Route path="/dashboard8" element={<Dashboard8 />} />
      <Route path="/dashboard9" element={<Dashboard9 />} />
      <Route path="/dashboard10" element={<Dashboard10 />} />
      <Route path="/dashboard19" element={<Dashboard11 />} />
      <Route path="/dashboard3" element={<Dashboard12 />} />
      <Route path="/dashboard4" element={<Dashboard13 />} />
      <Route path="/dashboard15" element={<Dashboard14 />} />
      <Route path="/dashboard13" element={<Dashboard15 />} />
      <Route path="/dashboard14" element={<Dashboard16 />} />
      <Route path="/frame-1000002074" element={<Frame />} />
      <Route path="/dashboard12" element={<Dashboard17 />} />
      <Route path="/dashboard5" element={<Dashboard18 />} />
      <Route path="/dashboard6" element={<Dashboard19 />} />
    </Routes>
  );
}
export default App;
