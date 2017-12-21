window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('sep,25,2017,23:00:00'); // ****** Change this line!
  doPic();
  doSucks();
}

function doPic(){
  var picNum = Math.floor(Math.random() * 6)+ 1;
  var picEl = document.getElementById('pic');
  picEl.src = "images/"+picNum+".jpg"  
}

function doSucks(){
  var pEl = document.getElementById("sucks");

  var date = new Date()
  var hour = date.getHours();
  var minute = date.getMinutes();
  var am = hour/12 < 1;
  
  hour = hour % 12;
  var minuteStr;
  minuteStr = minute;
  if(minute < 9){
    minuteStr="0"+minute.toString();
  }

  var dateStr;
  if(am){
    dateStr = hour+":"+minuteStr+" AM";
  }else{
    dateStr = hour+":"+minuteStr+" PM";    
  }
  pEl.innerHTML = "It is "+dateStr+" and everyone still sucks at fantasy";
}

function upTime(countTo) {
  now = new Date();

  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}