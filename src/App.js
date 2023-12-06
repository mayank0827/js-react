import { Route, Routes } from "react-router-dom";
import SlideBar from "./components/SlideBar";
import AccordianPage from "./pages/AccordianPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import MainNav from "./components/MainNav";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div>
      <SlideBar />
      <div>
        <Routes>
          <Route path="/" element={<MainNav />}>
            <Route index element={<DropdownPage />} />
            <Route path="/accordion" element={<AccordianPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/counter" element={<CounterPage initialCount={10} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
