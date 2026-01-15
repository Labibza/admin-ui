import React, { useContext, useState } from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { logoutService } from "../../services/authService";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function MainLayout({ children }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  const [loadingLogout, setLoadingLogout] = useState(false);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]" },
  ];

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  const handleLogout = async () => {
    if (loadingLogout) return;

    try {
      setLoadingLogout(true);
      await logoutService();
      logout();
    } catch (err) {
      console.error(err);
      logout(); 
    } finally {
      setLoadingLogout(false);
    }
  };

  return (
    <>
      <div className={`flex min-h-screen ${theme.name}`}>
        {/* SIDEBAR */}
        <aside className="bg-defaultBlack w-28 sm:w-64 text-special-bg2 flex flex-col justify-between px-7 py-12">
          <div>
            <div className="mb-10">
              <Logo variant="secondary" />
            </div>

            <nav>
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex px-4 py-3 rounded-md transition ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3 hover:text-white"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>
                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-2">Themes</p>
            <div className="flex flex-wrap gap-2">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer`}
                  onClick={() => setTheme(t)}
                />
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div>
            <button
              onClick={handleLogout}
              disabled={loadingLogout}
              className="w-full flex bg-special-bg3 text-white px-4 py-3 rounded-md disabled:opacity-50"
            >
              <div className="mx-auto sm:mx-0 text-primary">
                <Icon.Logout />
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </button>

            <div className="border my-10 border-b-special-bg"></div>

            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                <div>{user?.name}</div>
                <div className="text-xs text-gray-400">View Profile</div>
              </div>
              <Icon.Detail size={15} />
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <div className="bg-special-mainBg flex-1 flex flex-col">
          <header className="border-b border-gray-05 px-6 py-7 flex justify-between items-center">
            <div className="flex items-center">
              <div className="font-bold text-2xl me-6">{user?.name}</div>
              <div className="text-gray-03 flex items-center">
                <Icon.ChevronRight size={20} />
                <span>May 19, 2023</span>
              </div>
            </div>

            <div className="flex items-center">
              <NotificationsIcon className="text-primary scale-110 me-6" />
              <Input backgroundColor="bg-white" border="border-white" />
            </div>
          </header>

          <main className="flex-1 px-6 py-4">{children}</main>
        </div>
      </div>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: 9999,
          flexDirection: "column",
        }}
        open={loadingLogout}
      >
        <CircularProgress color="inherit" />
        <span className="mt-3 text-sm">Logging out...</span>
      </Backdrop>
    </>
  );
}

export default MainLayout;
