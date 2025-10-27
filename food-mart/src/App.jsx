import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div class="text-2xl text-red-700 mt-5 p-8  font-bold underline">
        Home Page
      </div>
    </>
  );
}

export default App;
