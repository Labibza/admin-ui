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
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/transaction",
      element: <TransactionPage />,
    },
    {
      path: "/bill",
      element: <BillsPage />,
    },
    {
      path: "/expense",
      element: <ExpensesPage />,
    },
    {
      path: "/goal",
      element: <GoalsPage />,
    },
    {
      path: "/setting",
      element: <SettingsPage />,
    },
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
