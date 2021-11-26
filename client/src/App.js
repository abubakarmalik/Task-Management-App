import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./components/Auth";
import AddTask from "./components/AddTask";
import Staticties from "./components/Staticties";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setLoginUser] = useState({});

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            strict
            caseSensitive={false}
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route
            path="/register"
            strict
            caseSensitive={false}
            element={<Register />}
          />

          <Route path="/home" strict caseSensitive={false} element={<Auth />} />

          <Route
            path="/addtask"
            strict
            caseSensitive={false}
            element={<AddTask />}
          />
          <Route
            path="/staticties"
            strict
            caseSensitive={false}
            element={<Staticties />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
