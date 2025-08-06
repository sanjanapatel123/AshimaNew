import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./Components/layout/ScrollToTop"; // import the new component

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* 👈 add this right inside BrowserRouter */}
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
