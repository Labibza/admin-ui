import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import TransactionPage from "./pages/transaction";
import BillsPage from "./pages/bills";
import ExpensesPage from "./pages/expenses";
import GoalsPage from "./pages/goals";
import SettingsPage from "./pages/settings";  
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
    {
      path: "/transaction",
      element: (
        <RequireAuth>
          <TransactionPage />
        </RequireAuth>
      ),
    },
    {
      path: "/bill",
      element: (
        <RequireAuth>
          <BillsPage />
        </RequireAuth>
      ),
    },
    {
      path: "/expense",
      element: ( 
        <RequireAuth>
          <ExpensesPage />
        </RequireAuth>
      ),
    },
    {
      path: "/goal",
      element: (
        <RequireAuth>
          <GoalsPage />
        </RequireAuth>
      ),
    },
    {
      path: "/setting",
      element: (
        <RequireAuth>
          <SettingsPage />
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
