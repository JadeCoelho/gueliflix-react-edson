import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";
import FavoritesProvider from "./contexts/Favorites";
import VideoAdd from "./pages/VideoAdd/VideoAdd";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:url" element={<Watch />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/add" element={<VideoAdd />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
