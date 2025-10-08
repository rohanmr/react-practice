import Calculator from "../components/Calculator/Calculator";
import { useEffect, useState } from "react";
import HeadingChange from "../components/headingChange/HeadingChange";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  const [temperature, setTemperature] = useState("");
  const [message, setMessage] = useState("");

  const temp = parseFloat(temperature);

  useEffect(() => {
    if (temperature === "") {
      setMessage("");
    } else if (temp >= 35) {
      setMessage("It’s too hot! Wear cotton clothes.");
    } else if (temp >= 20) {
      setMessage("Perfect weather! Enjoy your day.");
    } else if (temp >= 10) {
      setMessage("It’s cold, wear a jacket.");
    } else {
      setMessage("Too cold! Stay warm indoors.");
    }
  }, [temperature]);

  return (
    <>
      <Hero />
      <HeadingChange />
      <Calculator />
      <div className="text-center my-5">
        <div>Weather Suggestion App 🌤️</div>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
        />
        <p>{message}</p>
      </div>
    </>
  );
};

export default HomePage;
