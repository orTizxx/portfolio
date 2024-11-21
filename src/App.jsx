import { SpeedInsights } from "@vercel/speed-insights/react";
import { MyPortfolio } from "./components/main/MyPortfolio";

const App = () => {
  return (
    <div>
      <SpeedInsights />
      <MyPortfolio />
    </div>
  );
};

export default App;
