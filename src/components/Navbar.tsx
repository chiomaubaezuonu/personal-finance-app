import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/login" || location.pathname === "signup" && (
        <div className="flex h-17.5 w-full items-center justify-center rounded-b-lg  bg-gray-900 lg:hidden">
          <img src="/images/logo.svg" className="w-30.5" alt="Logo" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
