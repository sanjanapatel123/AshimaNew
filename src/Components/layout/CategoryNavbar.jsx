import { NavLink } from "react-router-dom";

export default function CategoryNavbar() {
  return (
    <nav className="bg-gray-100 px-6 py-3 shadow-sm sticky top-0 z-50">
      <ul className="flex gap-6 text-sm font-medium text-gray-700">
        <li>
          <NavLink to="/category/women" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Women</NavLink>
        </li>
        <li>
          <NavLink to="/category/kids" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Kids</NavLink>
        </li>
        <li>
          <NavLink to="/category/toys" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Toys</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Wishlist</NavLink>
        </li>
      </ul>
    </nav>
  );
}
