import "./App.css";
import { useState } from "react";
import SubmitButton from "./Components/SubmitButton";
import ResponsiveAppBar from "./Components/AppBar";
import Nutrition from "./Components/Nutrition";
import Button from "@mui/material/Button";

function App() {
  const [nutritionData, setNutritionData] = useState(null);

  async function fetchNutritionData() {
    try {
      const response = await fetch("http://localhost/nutrition");
      if (!response.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const data = await response.json();
      setNutritionData(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("不明なエラーが発生しました", error);
      }
    }
  }

  return (
    <div className="App">
      <ResponsiveAppBar/>
    </div>
  );
}

export default App;
