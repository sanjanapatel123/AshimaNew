import { Outlet } from "react-router-dom";
import CategoryNavbar from "../components/layout/CategoryNavbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <>
      <CategoryNavbar />
      <main className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
