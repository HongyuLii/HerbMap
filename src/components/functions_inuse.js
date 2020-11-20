function findTime() {
    var target_date = new Date();
    // console.log(target_date)
    target_date.setMonth(target_date.getMonth() - 6);  
    // console.log(target_date) 
    document.getElementById("time_button").innerHTML = "Showing records in the past six month";
    return target_date
  }

  function calCounts(Access, target_date) {
    return Access.map(calTimes, target_date)
  }
  
  function calTimes(access, target_date) {
    var date = Date.parse(access.accessDate);
    console.log("target_date: " + target_date)
    var target_date = Date.parse(target_date);
   // console.log("access_date:" + date)
    console.log("target_date: " + target_date)
    if (date < target_date){
      return 0
    } else {
      return access.cnt
    }
  }
  
  function getColorFromTimesofAccess(times){
    if(times<5){
      return "yellow"
    } else if (times<20) {
      return "orange"
    } else if (times < 30) {
      return "red"
    } else {
      return "blue"
    }
  }

export {findTime, calCounts, calTimes, getColorFromTimesofAccess};