import React,{useState,useRef} from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ChangeTimer} from './ChangeTimer';
import './Style/ModalWindow.css'

const ModalWindow = (props) => {
  const [timerHour, setTimerHour] = useState(0)
  const [timerMin, setTimerMin] = useState(0)
  const [timerSec, setTimerSec] = useState(0)
  const [doubleClick, setDoubleClick] = useState("Hour")

  function closeDoubleClickAdd(){
    if(doubleClick !== false ){
      setDoubleClick(false)
    }
    if(timerHour.length == 0){
      setTimerHour(0)
    }
    if(timerMin.length == 0){
      setTimerMin(0)
    }
    if(timerSec.length == 0){
      setTimerSec(0)
    }
    props.addtimervalue(timerHour,timerMin,timerSec)
  }
  function resetTimerValue(){
    setTimerHour(0)
    setTimerMin(0)
    setTimerSec(0)
  }
  function handleAnswerChang(e){
    if(e.key == "Enter" && doubleClick !== false){
      setTimerHour(timerHour.length == 0 ? 0 : timerHour)
      setTimerMin(timerMin.length == 0 ? 0 : timerMin)
      setTimerSec(timerSec.length == 0 ? 0 : timerSec)
      setDoubleClick(false)
    }
    props.addtimervalue(timerHour,timerMin,timerSec)
  }
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Setting
          </Modal.Title>
        </Modal.Header >
        <Modal.Body >
          <h4>Showing time:</h4>
          <div className="modalBody-styleTime">
            <div className="pmStyleTime" onClick={()=> props.choicestyletime("am")} style={{color: props.color}}>{props.timeam}</div>
            <div className="amStyleTime" onClick={()=> props.choicestyletime("pm")} style={{color: props.color}}>{props.timepm}</div>
          </div>
          <h4>Colors:</h4>
          <div className="modalBody-color">
            {props.statecolors.map(c => <div key={c.id} className="color" style={{background: c.style}} onClick={()=>props.colorssetclick(c.style)}></div>)}
          </div>
          <div className="option-Timer">
            <p className={props.optiontimer == "Timer" ? "active-optionTimer" : "deactivate -optionTimer"} onClick={()=> props.optiontimerclick('Timer')}>Timer</p>
            <p className={props.optiontimer == "Time" ? "active-optionTimer" : "deactivate -optionTimer"} onClick={()=> props.optiontimerclick('Time')}>Time</p>
          </div>
          <div className="Timer-box">
            <div className="Timer-box-inp" onKeyPress={handleAnswerChang}>
              <p onDoubleClick={()=>setDoubleClick("Hour")}>{doubleClick == "Hour" ? <input type="number"value={timerHour} onChange={(e)=> ChangeTimer(e , "Hour" , setTimerHour,timerHour)} max="24" min="0" /> : timerHour}</p>:
              <p onDoubleClick={()=>setDoubleClick("Min")}>{doubleClick == "Min" ? <input type="number"value={timerMin} onChange={(e)=> ChangeTimer(e , "Min" , setTimerMin,timerMin)} max="60" min="0" /> : timerMin}</p>:
              <p onDoubleClick={()=>setDoubleClick("Sec")}>{doubleClick == "Sec" ? <input type="number"value={timerSec} onChange={(e)=> ChangeTimer(e , "Sec" , setTimerSec,timerSec)} max="60" min="0" /> : timerSec}</p>
            </div>
            <div className="Timer-box-btn">
              <button onClick={resetTimerValue} className="btn btn-danger">Reset Timer</button>
              <button onClick={closeDoubleClickAdd} className="btn btn-success">Add timer</button>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalWindow;
