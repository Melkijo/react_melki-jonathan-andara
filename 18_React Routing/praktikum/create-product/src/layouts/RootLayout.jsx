import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  <>
    <Navbar />
    <h1>Hai</h1>
    <main>
      <Outlet />
    </main>
  </>;
}
