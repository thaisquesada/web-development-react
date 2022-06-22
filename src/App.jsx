import "./styles.css";
import { Routes, Route } from "react-router-dom";
import SerraStorage from "./pages/SerraStorage";
import Students from "./pages/Students";
import { SubjectRegister } from "./pages/SubjectRegister";
import { SubjectList } from "./pages/SubjectList";
import Navbar from "./components/Navbar"
import { ThemeContext } from "./context";
import { useContext } from "react";

function App() {
  const { selectedTheme } = useContext(ThemeContext);
  const theme = {
    light: {
      backgroundColor: '#fff',
      color: "#202225"
    },
    dark: {
      backgroundColor: '#202225',
      color: "#fff"
    },
  };

  return (
    <div className="container" style={theme[selectedTheme]}>
      <Navbar />
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