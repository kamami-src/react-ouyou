import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  return (
    <div>
      {state.length}
      <h1>Page1DetailAページです</h1>
    </div>
  );
};
