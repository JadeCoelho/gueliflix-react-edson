import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watch/:url" element={<Watch />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
