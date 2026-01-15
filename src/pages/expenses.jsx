import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseBreakdown from "../components/Fragments/CardExpensePage";
import { expenseService } from "../services/expenseService";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expenseService();
        setExpenses(data);
      } catch (error) {
        console.error(error);
        setExpenses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-[60vh] text-primary">
          <CircularProgress color="inherit" size={50} />
          <span className="ms-3">Loading Data</span>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h2 className="text-xl font-semibold mb-6">
        Expenses Comparison
      </h2>

      <CardExpenseBreakdown data={expenses} />
    </MainLayout>
  );
}

export default Expenses;