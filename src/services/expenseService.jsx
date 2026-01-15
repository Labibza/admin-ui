import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export const expenseService = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("FULL RESPONSE:", response.data);

    return response.data;
  } catch (error) {
    console.error("EXPENSE ERROR:", error);
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg || "Gagal mengambil data expenses",
    };
  }
};