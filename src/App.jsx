import "./styles.css";
import { Routes, Route } from "react-router-dom";
import SerraStorage from "./pages/SerraStorage";
import Students from "./pages/Students";
import { SubjectRegister } from "./pages/SubjectRegister";
import { SubjectList } from "./pages/SubjectList";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SerraStorage />} />
        <Route path="students" element={<Students />} />
        <Route path="subject">
          <Route path="register" element={<SubjectRegister />} />
          <Route path="list" element={<SubjectList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;