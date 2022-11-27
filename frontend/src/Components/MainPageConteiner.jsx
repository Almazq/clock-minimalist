import React, {useEffect,useState} from 'react';
import MainPage from './MainPage';


const initalStateColors =[
  {id:1, name: "write",style:"#fff"},
  {id:2, name: "purple",style:"purple"},
  {id:3, name: "pink",style:"pink"},
  {id:4, name: "violet",style:"violet"},
  {id:5, name: "red",style:"red"},
  {id:6, name: "gold",style:"gold"},
  {id:7, name: "green",style:"#013300"},
]

const MainPageConteiner = (props) => {
  const [date,setDate] = useState(new Date());
  const [styleTime,setStyleTime] = useState(localStorage.getItem('styleTime') == null ? "am" : localStorage.getItem('styleTime'));
  const [modal,setModal] = useState(false);
  const [location, setLocation] = useState("")
  const [stateColors, setStateColors] = useState(initalStateColors)
  const [color, setColor] = useState(localStorage.getItem('color') == null ? "write" : localStorage.getItem('color'))
  const [optionTimer, setOptionTimer] = useState("Time")
  const [valueTimer, setValueTimer] = useState({
    Hour:0,
    Min:0,
    Sec:0
  })

  useEffect(() => {
     setInterval(() => setDate(new Date()), 1000);
     localStorage.setItem('color', color);
   }, []);
   const clickBtn = ()=>{
     setModal(true)
   }
   const clickCloseModal = ()=>{
     setModal(false)
   }
   const choiceStyleTime = (styleTime)=>{
     setStyleTime(styleTime)
     localStorage.setItem('styleTime', styleTime);
   }
   const colorsSetClick = (colors)=>{
     setColor(colors)
     localStorage.setItem('color', colors);
   }
   const optionTimerClick = (option)=>{
     setOptionTimer(option)
   }
   const addTimerValue = (timerHour,timerMin,timerSec)=>{
     setValueTimer({
       Hour:timerHour.length == 0 ? 0 : timerHour,
       Min:timerMin.length == 0 ? 0 : timerMin,
       Sec:timerSec.length == 0 ? 0 : timerSec

     })
   }
   useEffect(()=>{
     fetch('/api')
     .then(response => response.json())
     .then(response => setLocation(`${response.region}/ ${response.country}`))
   }, [])
  return (
    <MainPage
      date={date} clickBtn={clickBtn} styleTime={styleTime} modal={modal}
      location={location} stateColors={stateColors} color={color}
      choiceStyleTime={choiceStyleTime} clickCloseModal={clickCloseModal} colorsSetClick={colorsSetClick}
      optionTimer={optionTimer} optionTimerClick={optionTimerClick} addTimerValue={addTimerValue}
      valueTimer={valueTimer}
    />
  )
}

export default MainPageConteiner
