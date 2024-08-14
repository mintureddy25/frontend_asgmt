import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./utils/pageNotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/Dashboard" Component={Dashboard} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </>
  );
}
