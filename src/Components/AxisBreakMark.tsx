// src/components/AxisBreakMark.tsx
type Props = {
    x: number;
    y: number;
  };
  
  const AxisBreakMark = ({ x, y }: Props) => {
    return (
      <g>
        <text x={x - 6} y={y - 6} fontSize={16} fill="gray">//</text>
      </g>
    );
  };
  
  export default AxisBreakMark;
  