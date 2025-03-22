import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Clock from "./components/Clock/Clock";
import {useEffect, useState} from "react";
function App() {

    const [isRunning, setIsRunning] = useState(false);

    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer;
        if (isRunning === 'reset') {
            setTime(time => 0);
        } else {
            if(isRunning) {
                timer = setInterval(() => {
                    setTime(time => time + 10);
                }, 10);
            }
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning]);

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
      <Clock time={time}></Clock>
      <Button onClick={startClock}>START</Button>
      <Button onClick={stopClock}>STOP</Button>
      <Button onClick={resetClock}>RESET</Button>
    </Container>
  );
}

export default App;
