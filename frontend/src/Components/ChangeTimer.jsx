export const ChangeTimer = (eTimer, name , setTimer,timer) => {
  let a = '';
  a = `${a}${eTimer.target.value}`;
  if(name == "Hour"){
    if(Number(a) <= 24 && Number(a) >= 0 && a.length <= 2){
      setTimer(eTimer.target.value)
      a = timer;
    }
  }
  if(name == "Min" || name == "Sec"){
    if(Number(a) <= 60 && Number(a) >= 0 && a.length <= 2){
      setTimer(eTimer.target.value)
      a = timer;
    }
  }
}
