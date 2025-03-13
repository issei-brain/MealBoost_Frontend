type SubmitButtonProps = {
    onClick: () => void; // 引数なし、戻り値なしの関数
  };
  
  export default function SubmitButton({ onClick }: SubmitButtonProps) {
    return <button onClick={onClick}>成分表を取得</button>;
  }
  