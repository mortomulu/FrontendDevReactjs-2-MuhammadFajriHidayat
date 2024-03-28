import DetailView from "./pages/DetailView";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<DetailView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
