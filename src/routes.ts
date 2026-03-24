import { createBrowserRouter } from "react-router";
import Portfolio from "./pages/Portfolio";
import AudioAdmin from "./pages/AudioAdmin";
import AudioDebugPage from "./pages/AudioDebugPage";
import ImageMapper from "./pages/ImageMapper";
import AudioLab from "./pages/AudioLab";
import Strategy from "./pages/Strategy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/audio-lab",
    Component: AudioLab,
  },
  {
    path: "/strategy",
    Component: Strategy,
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
