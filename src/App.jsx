import "./App.css";
import { Mainpage } from "./component/Mainpage";
import { Mealinfo } from "./component/Mealinfo";

import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Mainpage /> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:mealid" element={<Mealinfo />} />
      </Routes>
    </>
  );
}

export default App;
