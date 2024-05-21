

setInterval(function(){
 
    let date = new Date();
   


    let getHour = date.getHours();
    let getMin = date.getMinutes();
    let getSec = date.getSeconds();
    console.log(getSec);
    let hour = document.querySelector('.hour');
    let min = document.querySelector('.min');
    let sec = document.querySelector(".sec");
    let amPm = document.querySelector(".amPm");
    
    if(getHour > 12) {
        amPm.innerHTML = "PM";
    }else{
        amPm.innerHTML = "AM";
    }


    if(getHour > 12) {
        let finalHour = getHour - 12;
        let finalMin = getMin - 12;
        let finalSec = getSec - 12;
        if (finalHour < 10){
            finalHour = '0' + finalHour;
        } 
        hour.innerHTML = finalHour;
        if (finalMin < 10){
            finalMin = '0' + finalMin;
        } 
        min.innerHTML = finalMin;
        if (finalSec < 10){
            finalSec = '0' + finalSec;
        } 
        sec.innerHTML = finalSec;
    
    }else{
           let finalHour = getHour;
           let finalMin = getMin;
           let finalSec = getSec;
            hour.innerHTML = finalHour;
            min.innerHTML = finalMin;
            sec.innerHTML = finalSec;
    }



   
    min.innerHTML = getMin;
    sec.innerHTML = getSec;
    
    
    console.log(getMin);
    console.log(getSec);
});