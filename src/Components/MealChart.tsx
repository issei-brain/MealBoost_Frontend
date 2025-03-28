// MealChart.tsx
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
  
  const MealChart = () => {
    const data = Array.from({ length: 24 }, (_, i) => {
      const hour = `${i}:00`;
      return {
        time: hour,
        protein: hour === '9:00' ? 20 : 0,
        fat: hour === '9:00' ? 1 : 0,
        carb: hour === '9:00' ? 100 : 0,
      };
    });
  
    const now = new Date();
    const currentHour = `${now.getHours()}:00`;
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="time" type="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="protein" stackId="a" fill="#f28b82" barSize={8} />
          <Bar dataKey="fat" stackId="a" fill="#aecbfa" barSize={8} />
          <Bar dataKey="carb" stackId="a" fill="#fff475" barSize={8} />
          <ReferenceLine x={currentHour} stroke="green" strokeWidth={2} />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default MealChart;
  