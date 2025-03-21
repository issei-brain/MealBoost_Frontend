import "./App.css";
import { useState } from "react";
import ResponsiveAppBar from "./Components/AppBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodayMeal from "./Pages/TodayMeal";
import PastMeal from "./Pages/PastMeal";
import BodyStatus from "./Pages/BodyStatus";

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
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar/>
      </div>
      <Routes>
        <Route path="/today-meal" element={<TodayMeal />} />
        <Route path="/past-meal" element={<PastMeal />} />
        <Route path="/body-status" element={<BodyStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
