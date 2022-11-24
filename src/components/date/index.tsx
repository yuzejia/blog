
import clsx from "clsx";
import styles from "./styles.module.css";

import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';

// 组件四、时间组件
function LeftTime() {
  const [current, setTime] = useState("");

  const timerID: {current: NodeJS.Timer} = useRef();
  
  const deadLine= moment('2023-1-1 00:00:00');

  const deadLineTime = deadLine.diff(moment())

  let durationTime = moment.duration(deadLineTime);

  
  const isArrived =  deadLineTime < 0;
  
  useEffect(() => {
    timerID.current = setInterval(() => {
      const arriveTime = `${durationTime.months() } 月,${durationTime.days()} 天, ${durationTime.hours()} , ${durationTime.minutes()} , ${durationTime.seconds()}`;
      if (!isArrived) {
        durationTime = moment.duration(deadLine.diff(moment()));

        setTime(() => arriveTime); // make pretty
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (isArrived) {
      clearInterval(timerID.current);
    }
  });

  return (
    <div id="timeDiv">
      
      <div className={styles.rope}></div>
        {
          current ? current.split(',').map((item, index) => <span key={index} className={ clsx(styles.spanTime)}> {item} </span>  ) : ''
        }

    </div>
  );
}

export default class DateBox extends React.Component {
    
   state: Readonly<{id: number}> = {
     id: 1111
   }

    
    render(): React.ReactNode {
        return (
         <div className={clsx(styles.dateContent) }>
           <div className="title">
              2023年倒计时
           </div>
           <div className={clsx(styles.timeBox)}>
               <LeftTime />

           </div>
         </div>
        );
      }
}