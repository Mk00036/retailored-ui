import { useState } from "react";
import SideBar from "./sideBar";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-content-between align-items-center p-3 shadow-2 surface-card">
      {/* Left Section: Logo + Menu Button */}
      <div className="flex align-items-center gap-3">
        <a
          href="/"
          className="flex align-items-center gap-2 text-900 no-underline"
        >
          <img
            src="https://rt.skylinebiz.in/layout/images/reTailoredLogo.jpg"
            alt="logo"
            className="w-3rem"
          />
          <span className="font-bold text-xl">reTailored</span>
        </a>
        <SideBar />
      </div>

      {/* Right Section: (Optional) Logout, etc. */}
      <div>
        <button
          type="button"
          className="p-link border-none bg-transparent text-gray-500 hover:text-red-500 transition-colors"
          // onClick={handleLogout}
        >
          <i className="pi pi-power-off text-xl" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
