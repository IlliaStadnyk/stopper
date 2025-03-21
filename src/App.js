import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Clock from "./components/Clock/Clock";
import {useState} from "react";
function App() {

    const [isRunning, setIsRunning] = useState(false);

    const startClock = () => {
        console.log("Starting Clock...");
        setIsRunning(true);
    };

    const stopClock = () => {
        console.log("Stopping Clock...");
        setIsRunning(false);
    };

    const resetClock = () => {
        console.log("Reset Clock...");
        setIsRunning('reset');
    };

  return (
    <Container>
      <Clock isRuning={isRunning}></Clock>
      <Button onClick={startClock}>START</Button>
      <Button onClick={stopClock}>STOP</Button>
      <Button onClick={resetClock}>RESET</Button>
    </Container>
  );
}

export default App;
