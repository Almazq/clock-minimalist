import React, {useEffect,useState} from 'react';
import ModalWindow from './ModalWindow';
import Timer from './Timer';


const MainPage = (props) => {
  let date = props.date;
  let timeAm = date.toLocaleTimeString();
  let timePm = `${date.getHours() % 12 || 12}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <div className="main-page">
    <div className="header-btn">
      <p onClick={props.clickBtn}>&#9776;</p>
    </div>
    <div className="realTime-box">
      {props.optionTimer == "Timer"
      ? <Timer valueTimer={props.valueTimer} modal={props.modal} color={props.color}/>
      : <p className="time" style={{color: props.color}}>{props.styleTime == "pm" ? `${date.getHours() % 12 || 12}:${date.getMinutes()}:${date.getSeconds()}` : date.toLocaleTimeString()}</p>
      }

    </div>
    {props.location !== "" ? <div className="location" style={{color: props.color}}><p >{props.location}</p></div> : <div></div>}

       <ModalWindow
         show={props.modal} onHide={props.clickCloseModal}
         timeam={timeAm} timepm={timePm}
         choicestyletime={props.choiceStyleTime} statecolors={props.stateColors} color={props.color}
         colorssetclick={props.colorsSetClick}
         optiontimer={props.optionTimer} optiontimerclick={props.optionTimerClick}
         addtimervalue={props.addTimerValue}
       />
     </div>
  )
}

export default MainPage
