import "./App.css";
import { useState } from "react";
import SubmitButton from "./Components/SubmitButton";
import Nutrition from "./Components/Nutrition";

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
      console.error(error.message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <SubmitButton onClick={fetchNutritionData} />
        {nutritionData && <Nutrition data={nutritionData} />}
      </header>
    </div>
  );
}

export default App;
