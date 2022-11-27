import React,{useEffect,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Timer = (props) => {
  const [timerHour,setTimerHour] = useState(props.valueTimer.Hour);
  const [timerMin,setTimerMin] = useState(props.valueTimer.Min);
  const [timerSec,setTimerSec] = useState(props.valueTimer.Sec);
  const [alertValue,setAlertValue] = useState(false);
  React.useEffect(() => {
    setTimerHour(props.valueTimer.Hour)
    setTimerMin(props.valueTimer.Min)
    setTimerSec(props.valueTimer.Sec)

  },[props.valueTimer])

  React.useEffect(() => {
    if(timerHour == 0 && timerMin == 0 && timerSec == 0 && props.modal == false){
      setAlertValue(true)
    }else{
      if(timerSec !== 0 ){
        const timer =
          timerSec > 0 && setInterval(() => setTimerSec(timerSec - 1), 1000);
          return () => clearInterval(timer);
      }else if(timerHour !== 0 && timerMin == 0){
        setTimerHour(timerHour - 1);
        setTimerMin(59)
        setTimerSec(59)
      }else if(timerMin !== 0 ){
        setTimerMin(timerMin - 1);
        setTimerSec(60)
      }
    }
    }, [timerSec]);

  return (
    <div>
      <Modal show={alertValue} onHide={()=>(setAlertValue(false))}>
        <Modal.Body>end of timer!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>(setAlertValue(false))}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <p style={{color: props.color}}>{`${timerHour}:${timerMin}:${timerSec}`}</p>
    </div>
  )
}
export default Timer
