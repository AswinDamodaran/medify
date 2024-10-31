import { CssBaseline } from "@mui/material";
import "./App.css";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Headercomp from "./components/header/Headercomp";
import Downloadapp from "./components/Downloadapp/Downloadapp";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        preventDuplicate
      >
        <CssBaseline />
        <Headercomp />
        <NavBar />
        <Outlet />
        <Downloadapp />
        <Footer />
      </SnackbarProvider>
    </div>
  );
}

export default App;
