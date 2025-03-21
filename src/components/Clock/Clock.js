import styles from './Clock.module.scss'
import {useState, useEffect} from 'react'

const Clock = props => {
     const [time, setTime] = useState(0);

     useEffect(() => {
         let timer;
         if (props.isRuning === 'reset') {
             setTime(time => 0);
         } else {
             if(props.isRuning) {
                 timer = setInterval(() => {
                     setTime(time => time + 10);
                 }, 10);
             }
         }

         return () => {
             if (timer) clearInterval(timer);
         };
     }, [props.isRuning]);

    const formatTime = (milliseconds) => {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const ms = milliseconds % 1000;


        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
    };

    return <h1 className={styles.clock}>{formatTime(time)}</h1>;
 }
 export default Clock;