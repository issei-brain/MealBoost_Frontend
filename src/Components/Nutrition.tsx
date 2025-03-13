type NutritionData = {
  protein: number;
  carbohydrates: number;
  fat: number;
};

type NutritionProps = {
  data: NutritionData;
};

export default function Nutrition({ data }: NutritionProps) {
  return (
    <div>
      <h2>Nutrition Facts</h2>
      <p>Protein: {data.protein}</p>
      <p>Carbohydrates: {data.carbohydrates}</p>
      <p>Fat: {data.fat}</p>
    </div>
  );
}
