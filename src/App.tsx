import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./pages/Title";
import Lobby from "./pages/Lobby/index";
import Game from "./pages/Game/index";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;