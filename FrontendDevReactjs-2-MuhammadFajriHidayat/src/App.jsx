import DetailView from "./pages/DetailView";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" exact element={<DetailView />} />
          <Route element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
