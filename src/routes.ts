import { createBrowserRouter } from "react-router";
import Portfolio from "./pages/Portfolio";
import AudioAdmin from "./pages/AudioAdmin";
import AudioDebugPage from "./pages/AudioDebugPage";
import ImageMapper from "./pages/ImageMapper";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/admin/audio",
    Component: AudioAdmin,
  },
  {
    path: "/admin/images",
    Component: ImageMapper,
  },
  {
    path: "/debug",
    Component: AudioDebugPage,
  },
]);